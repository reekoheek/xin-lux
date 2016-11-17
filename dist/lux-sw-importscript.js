webpackJsonp([3],{

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xin = __webpack_require__(0);

var _xin2 = _interopRequireDefault(_xin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LuxSwImportscript = function (_xin$Component) {
  _inherits(LuxSwImportscript, _xin$Component);

  function LuxSwImportscript() {
    _classCallCheck(this, LuxSwImportscript);

    return _possibleConstructorReturn(this, (LuxSwImportscript.__proto__ || Object.getPrototypeOf(LuxSwImportscript)).apply(this, arguments));
  }

  _createClass(LuxSwImportscript, [{
    key: '_getParameters',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(baseUrl) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {
                  importscript: new window.URL(this.href, baseUrl).href
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
  }, {
    key: 'props',
    get: function get() {
      return {
        href: {
          type: String,
          required: true
        }
      };
    }
  }]);

  return LuxSwImportscript;
}(_xin2.default.Component);

_xin2.default.define('lux-sw-importscript', LuxSwImportscript);

exports.default = LuxSwImportscript;

/***/ }

},[33]);
//# sourceMappingURL=lux-sw-importscript.js.map