/* globals importScripts, self, location */
(global => {
  'use strict';

  function deserializeUrlParams (queryString) {
    return new Map(queryString.split('&').map(function (keyValuePair) {
      var splits = keyValuePair.split('=');
      var key = decodeURIComponent(splits[0]);
      var value = decodeURIComponent(splits[1]);
      if (value.indexOf(',') >= 0) {
        value = value.split(',');
      }

      return [key, value];
    }));
  }

  function getHandler (strategy) {
    let handler = global.toolbox[strategy] || global[strategy];
    if (typeof handler !== 'function') {
      throw new Error(`Handler for ${strategy} is not a function`);
    }
    return handler;
  }

  global.params = deserializeUrlParams(location.search.substring(1));

  // Load the sw-toolbox library.
  importScripts('./sw/sw-toolbox/sw-toolbox.js');

  global.toolbox.options.debug = global.params.get('debug') === 'true';

  if (global.params.has('importscript')) {
    var scripts = global.params.get('importscript');
    if (Array.isArray(scripts)) {
      importScripts.apply(null, scripts);
    } else {
      importScripts(scripts);
    }
  }

  if (global.params.has('defaultCacheStrategy')) {
    let defaultCacheStrategy = global.params.get('defaultCacheStrategy');
    global.toolbox.router.default = getHandler(defaultCacheStrategy);
  }

  if (global.params.has('precache')) {
    let precache = [];
    precache.concat(global.params.get('precache'));
    global.toolbox.precache(precache);
  }

  if (global.params.has('route')) {
    let setsOfRouteParams = global.params.get('route');
    while (setsOfRouteParams.length > 0) {
      let routeParams = setsOfRouteParams.splice(0, 3);
      let originParam;
      if (routeParams[2]) {
        originParam = { origin: new RegExp(routeParams[2]) };
      }

      let handler = getHandler(routeParams[1]);
      global.toolbox.router.get(routeParams[0], handler, originParam);
    }
  }

  if (global.params.get('skipWaiting') === 'true' && global.skipWaiting) {
    global.addEventListener('install', function (e) {
      e.waitUntil(global.skipWaiting());
    });
  }

  if (global.params.get('clientsClaim') === 'true' && global.clients && global.clients.claim) {
    global.addEventListener('activate', function (e) {
      e.waitUntil(global.clients.claim());
    });
  }
})(self);
