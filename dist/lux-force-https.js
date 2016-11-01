webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _xin = __webpack_require__(1);
	
	var _xin2 = _interopRequireDefault(_xin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LuxForceHttps = function (_xin$Component) {
	  _inherits(LuxForceHttps, _xin$Component);
	
	  function LuxForceHttps() {
	    _classCallCheck(this, LuxForceHttps);
	
	    return _possibleConstructorReturn(this, (LuxForceHttps.__proto__ || Object.getPrototypeOf(LuxForceHttps)).apply(this, arguments));
	  }
	
	  _createClass(LuxForceHttps, [{
	    key: 'created',
	    value: function created() {
	      if (window.location.protocol === 'http:' && !isLocalhost(window.location.hostname)) {
	        // Redirect to https: if we're currently using http: and we're not on localhost.
	        window.location.protocol = 'https:';
	      }
	    }
	  }]);
	
	  return LuxForceHttps;
	}(_xin2.default.Component);
	
	function isLocalhost(hostname) {
	  // !! coerces the logical expression to evaluate to the values true or false.
	  return !!(hostname === 'localhost' || // [::1] is the IPv6 localhost address.
	  hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
	  hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
	}
	
	_xin2.default.define('lux-force-https', LuxForceHttps);
	
	exports.default = LuxForceHttps;

/***/ }
]);
//# sourceMappingURL=lux-force-https.js.map