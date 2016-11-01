webpackJsonp([4],[
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LuxSwFetch = function (_xin$Component) {
	  _inherits(LuxSwFetch, _xin$Component);
	
	  function LuxSwFetch() {
	    _classCallCheck(this, LuxSwFetch);
	
	    return _possibleConstructorReturn(this, (LuxSwFetch.__proto__ || Object.getPrototypeOf(LuxSwFetch)).apply(this, arguments));
	  }
	
	  _createClass(LuxSwFetch, [{
	    key: '_getParameters',
	    value: function () {
	      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                return _context.abrupt('return', {
	                  route: [this.path, this.handler, this.origin]
	                });
	
	              case 1:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function _getParameters() {
	        return _ref.apply(this, arguments);
	      }
	
	      return _getParameters;
	    }()
	  }, {
	    key: 'props',
	    get: function get() {
	      return _xin2.default.mix(_get(LuxSwFetch.prototype.__proto__ || Object.getPrototypeOf(LuxSwFetch.prototype), 'props', this), {
	        handler: {
	          type: String,
	          required: true
	        },
	
	        path: {
	          type: String,
	          required: true
	        },
	
	        origin: {
	          type: String,
	          value: ''
	        }
	      });
	    }
	  }]);
	
	  return LuxSwFetch;
	}(_xin2.default.Component);
	
	_xin2.default.define('lux-sw-fetch', LuxSwFetch);
	
	exports.default = LuxSwFetch;

/***/ }
]);
//# sourceMappingURL=lux-sw-fetch.js.map