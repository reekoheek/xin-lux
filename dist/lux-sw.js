webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _xin = __webpack_require__(1);
	
	var _xin2 = _interopRequireDefault(_xin);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function isServiceWorkerSupported() {
	  return 'serviceWorker' in navigator;
	}
	
	var LuxSw = function (_xin$Component) {
	  _inherits(LuxSw, _xin$Component);
	
	  function LuxSw() {
	    _classCallCheck(this, LuxSw);
	
	    return _possibleConstructorReturn(this, (LuxSw.__proto__ || Object.getPrototypeOf(LuxSw)).apply(this, arguments));
	  }
	
	  _createClass(LuxSw, [{
	    key: 'attached',
	    value: function () {
	      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	        var _this2 = this;
	
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _get(LuxSw.prototype.__proto__ || Object.getPrototypeOf(LuxSw.prototype), 'attached', this).call(this);
	
	                if (isServiceWorkerSupported()) {
	                  _context2.next = 4;
	                  break;
	                }
	
	                console.error('Service worker is not supported!');
	                return _context2.abrupt('return');
	
	              case 4:
	                _context2.prev = 4;
	                return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
	                  var params, childParams, url, registration;
	                  return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                      switch (_context.prev = _context.next) {
	                        case 0:
	                          params = {
	                            version: '1.0',
	                            skipWaiting: _this2.skipWaiting,
	                            clientsClaim: _this2.clientsClaim,
	                            debug: _this2.debug,
	                            defaultCacheStrategy: _this2.defaultCacheStrategy
	                          };
	                          _context.next = 3;
	                          return Promise.all([].map.call(_this2.children, function (el) {
	                            return el._getParameters();
	                          }));
	
	                        case 3:
	                          childParams = _context.sent;
	
	
	                          childParams.forEach(function (param) {
	                            Object.keys(param).forEach(function (key) {
	                              params[key] = (params[key] || []).concat(param[key]);
	                            });
	                          });
	
	                          url = _this2.href + '?' + _this2._serializeUrlParams(params);
	                          _context.next = 8;
	                          return navigator.serviceWorker.register(url);
	
	                        case 8:
	                          registration = window.sw = _context.sent;
	
	
	                          console.info('Service worker registration successful with scope: ' + registration.scope);
	
	                        case 10:
	                        case 'end':
	                          return _context.stop();
	                      }
	                    }
	                  }, _callee, _this2);
	                })(), 't0', 6);
	
	              case 6:
	                _context2.next = 12;
	                break;
	
	              case 8:
	                _context2.prev = 8;
	                _context2.t1 = _context2['catch'](4);
	
	                console.error(_context2.t1.name + ': ' + _context2.t1.message);
	                console.warn('\nMaybe, a valid service worker script not found "' + this.href + '"\nCreate new file "' + this.href + '" and copy paste lines below,\n\n```javascript\n\nimportScripts(\'/sw/service-worker.js\');\n\n```');
	
	              case 12:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[4, 8]]);
	      }));
	
	      function attached() {
	        return _ref.apply(this, arguments);
	      }
	
	      return attached;
	    }()
	  }, {
	    key: '_serializeUrlParams',
	    value: function _serializeUrlParams(params) {
	      return Object.keys(params).sort().map(function (key) {
	        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	      }).join('&');
	    }
	  }, {
	    key: 'props',
	    get: function get() {
	      return _xin2.default.mix(_get(LuxSw.prototype.__proto__ || Object.getPrototypeOf(LuxSw.prototype), 'props', this), {
	        href: {
	          type: String,
	          value: 'sw-import.js'
	        },
	
	        skipWaiting: {
	          type: Boolean,
	          value: false
	        },
	
	        clientsClaim: {
	          type: Boolean,
	          value: false
	        },
	
	        debug: {
	          type: Boolean,
	          value: false
	        },
	
	        defaultCacheStrategy: {
	          type: String,
	          value: 'networkFirst'
	        }
	      });
	    }
	  }]);
	
	  return LuxSw;
	}(_xin2.default.Component);
	
	_xin2.default.define('lux-sw', LuxSw);
	
	exports.default = LuxSw;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./sw/service-worker.js";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./sw/sw-toolbox/sw-toolbox.js";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./sw/sw-toolbox/sw-toolbox.js.map";

/***/ }
]);
//# sourceMappingURL=lux-sw.js.map