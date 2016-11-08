webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _xin = __webpack_require__(1);
	
	var _xin2 = _interopRequireDefault(_xin);
	
	__webpack_require__(27);
	
	__webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LuxSwOfflineAnalytics = function (_xin$Component) {
	  _inherits(LuxSwOfflineAnalytics, _xin$Component);
	
	  function LuxSwOfflineAnalytics() {
	    _classCallCheck(this, LuxSwOfflineAnalytics);
	
	    return _possibleConstructorReturn(this, (LuxSwOfflineAnalytics.__proto__ || Object.getPrototypeOf(LuxSwOfflineAnalytics)).apply(this, arguments));
	  }
	
	  _createClass(LuxSwOfflineAnalytics, [{
	    key: '_getParameters',
	    value: function () {
	      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(baseUrl) {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                return _context.abrupt('return', {
	                  importscript: [new window.URL('./sw/simple-db.js', baseUrl).href, new window.URL('./sw/offline-analytics.js', baseUrl).href]
	                });
	
	              case 1:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function _getParameters(_x) {
	        return _ref.apply(this, arguments);
	      }
	
	      return _getParameters;
	    }()
	  }]);
	
	  return LuxSwOfflineAnalytics;
	}(_xin2.default.Component);
	
	_xin2.default.define('lux-sw-offline-analytics', LuxSwOfflineAnalytics);
	
	exports.default = LuxSwOfflineAnalytics;

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./sw/simple-db.js";

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./sw/offline-analytics.js";

/***/ }

});
//# sourceMappingURL=lux-sw-offline-analytics.js.map