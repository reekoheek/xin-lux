importScripts('components/xin-lux/js/cache-polyfill.js');

(function(root) {
  'use strict';

  function deserializeUrlParams(queryString) {
    if (queryString.trim() === '') {
      return {};
    }

    return queryString.split('&').map(function(keyValuePair) {
      var splits = keyValuePair.split('=');
      var key = decodeURIComponent(splits[0]);
      var value = decodeURIComponent(splits[1]);
      if (value.indexOf(',') >= 0) {
        value = value.split(',');
      }

      return {
        key: key,
        value: value
      };
    }).reduce(function(oldValue, value) {
      oldValue[value.key] = value.value;
      return oldValue;
    }, {});
  }

  var optionalParam    = /\((.*?)\)/g;
  var namedParam       = /(\(\?)?:\w+/g;
  var splatParam       = /\*\w+/g;
  var escapeRegExp     = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  var availableMethods = ['get', 'post', 'put', 'delete', 'head'];

  var SWTool = root.SWTool = function(options) {
    this._listeners = {};
    this.options = options;
    this.caches = {};
    this.routers = {};
    this.middlewares = [];

    self.addEventListener('install', function(event) {
      // console.log('sw> install');
      event.waitUntil(
        this.initCaches()
          .then(function() {
            return this.emit('install', event);
          }.bind(this))
          .then(function() {
            if (options.skipWaiting) {
              return self.skipWaiting();
            }
          })
          .catch(function(err) {
            console.error('sw> ' + err.stack);
            throw err;
          })
      );
    }.bind(this));

    self.addEventListener('activate', function(event) {
      // console.log('sw> activate');
      event.waitUntil(
        this.emit('activate', event)
          .then(function() {
            if (this.options.clientsClaim) {
              return self.clients.claim();
            }
          }.bind(this))
      );
    }.bind(this));

    self.addEventListener('fetch', function(event) {
      // console.log('sw> fetch');
      this.emit('fetch', event)
        .then(function() {
          return this.fetch(event);
        }.bind(this));
    }.bind(this));

    this.use(this.handleCache);
  };

  var instance;
  SWTool.initialize = function(options) {
    if (!instance) {
      options = options || deserializeUrlParams(location.search.substring(1));
      console.log('sw> Initialize service worker instance with options', options);
      instance = new SWTool(options);
    }
    return instance;
  };

  var strategies = SWTool.strategies = {};
  SWTool.strategies.fastest = function(cache, event) {
    var request = event.request;
    event.respondWith(
      cache.match(request).then(function(response) {
        var fetchPromise = fetch(request).then(function(networkResponse) {
            try {
              if (request.method === 'GET') {
                cache.put(request, networkResponse.clone())
                  .catch(function(e) {
                    console.error('>>> SW error', e);
                    throw e;
                  });
              }
            } catch(e) {
              console.error('>>> SW error', e);
              throw e;
            }
            return networkResponse;
          });

        return response || fetchPromise;
      })
    );
    throw new Stop();
  };

  SWTool.getStrategy = function(strategy) {
    if (typeof strategy === 'object') {
      return strategy;
    }
    return strategies[strategy];
  };

  SWTool.prototype.handleCache = function(event) {
    var url = new URL(event.request.url);

    var promise = Promise.resolve();

    Object.keys(this.caches).some(function(cacheId) {
        var cacheObject = this.caches[cacheId];
        var precache = cacheObject.precache;
        var strategy = cacheObject.strategy;

        if (cacheObject.precache.indexOf(event.request.url) !== -1 || cacheObject.precache.indexOf(url.pathname) !== -1) {
          promise = promise.then(function() {
              return caches.open(cacheId);
            })
            .then(function(cache) {
              console.log('CACHED>', event.request.method, event.request.url);
              return strategy(cache, event);
            });
          return true;
        }
    }.bind(this));

    return promise;

    // var promise;
    // Object.keys(this.caches).forEach(function(cacheId) {

    //   if (cacheObject.precache.indexOf(event.request.url) !== -1 || cacheObject.precache.indexOf(url.pathname) !== -1) {
    //     promise = caches.open(cacheId).then(function(cache) {
    //       var strategy = cacheObject.strategy;
    //       strategy(cache, event);
    //     });
    //     return true;
    //   }
    // }.bind(this));

    // return promise;
  };

  SWTool.prototype.addCache = function(cache) {
    cache.strategy = SWTool.getStrategy(cache.strategy || 'fastest');
    this.caches[cache.id] = cache;
  };

  SWTool.prototype.initCaches = function() {
    return Promise.all(
      Object.keys(this.caches).map(function(name) {
        var cacheOptions = this.caches[name];
        return caches.open(name)
          .then(function(cache) {
            if (cacheOptions.precache && cacheOptions.precache.length > 0) {
              console.log('sw caching:', cacheOptions.precache);
              return cache.addAll(cacheOptions.precache);
            }
          });
      }.bind(this))
    );
  };

  SWTool.prototype.addRouter = function(options) {
    options = options || {};
    options.origin = options.origin || location.origin;

    var router = new Router(this, options);
    this.routers[options.origin] = router;
    return router;
  };

  SWTool.prototype.emit = function(name, detail) {
    var listeners = this._listeners[name] || [];
    var promise = Promise.resolve();

    listeners.forEach(function(listener) {
      promise = promise.then(function() {
        return listener.call(this, detail);
      }.bind(this));
    }.bind(this));

    return promise;
  };

  SWTool.prototype.fetch = function(event) {
    var promise = Promise.resolve();
    var args = arguments;

    this.middlewares.forEach(function(middleware) {
      promise = promise.then(function() {
        return middleware.apply(this, args);
      }.bind(this));
    }.bind(this));

    return promise.then(function() {
        var url = new URL(event.request.url);
        if (this.routers[url.origin]) {
          return this.routers[url.origin].fetch(event);
        }
      }.bind(this))
      .then(function(response) {
        if (response) {
          console.info('ROUTED>',event.request.method, event.request.url);
          event.respondWith(response);
        } else {
          console.warn('DEFAULT>',event.request.method, event.request.url);
          // event.responseWith(fetch(request.url));
        }
      })
      .catch(function(err) {
        if (err instanceof Stop) {
          // noop
        } else {
          console.error('UNHANDLED>', event.request.method, event.request.url, err.stack);
        }
      });
  };

  SWTool.prototype.use = function(middleware) {
    this.middlewares.push(middleware);
    return this;
  };

  /**
   * Stop
   * throw this to stop promise immediately
   * @param {string} message
   */
  var Stop = SWTool.Stop = function(detail) {
    this.name = 'Stop';
    this.message = 'Stop promise propagation';
    this.detail = detail;
  };

  Stop.prototype = Object.create(Error.prototype);

  /**
   * SWTool.Router
   */
  var Router = SWTool.Router = function(sw, options) {
    this.sw = sw;
    options = options || {};
    this.origin = options.origin || location.origin;
    this.handlers = availableMethods.reduce(function(obj, method) {
      obj[method] = [];
      return obj;
    }, {});
  };

  Router.prototype._routeToRegExp = function(route) {
    route = route.replace(escapeRegExp, '\\$&')
      .replace(optionalParam, '(?:$1)?')
      .replace(namedParam, function(match, optional) {
        return optional ? match : '([^/?]+)';
      })
      .replace(splatParam, '([^?]*?)');
    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  };

  Router.prototype.route = function(method, route, callback) {
    var re;
    if (route instanceof RegExp) {
      re = route;
    } else {
      re = this._routeToRegExp(route);
    }
    if (method === 'any') {
      var handler = {
        method: method,
        re: re,
        route: route,
        callback: callback
      };
      availableMethods.forEach(function(method) {
        this.handlers[method].push(handler);
      }.bind(this));
    } else {
      this.handlers[method].push({
        method: method,
        re: re,
        route: route,
        callback: callback
      });
    }

    return this;
  };

  Router.prototype.fetch = function(event) {
    var handlers = this.handlers[event.request.method.toLowerCase()];
    if (handlers && handlers.length) {
      var url = new URL(event.request.url);

      var result;
      var handled = handlers.some(function(handler) {
        var matches = url.pathname.match(handler.re);
        if (matches) {
          matches.shift();

          event.router = this;

          result = new Promise(function(resolve, reject) {
            try {
              resolve(handler.callback.apply(event, matches));
            } catch(err) {
              reject(err);
            }
          });
          return true;
        }
      }.bind(this));

      if (handled) {
        console.log('handled');
        return result;
      }
    }
  };

  availableMethods.forEach(function(method) {
    Router.prototype[method] = function(route, callback) {
      return this.route(method, route, callback);
    };
  });

  Router.prototype.any = function(route, callback) {
    return this.route('any', route, callback);
  };

  Router.prototype.end = function() {
    return this.sw;
  };
})(this);