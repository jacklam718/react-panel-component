'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX_CLS = 'tabbar-component';
var styles = {
  tabbar: {
    backgroundColor: '#fff',
    display: 'flex'
  }
};

var defaultProps = {
  style: {}
};

var TabBar = function (_Component) {
  (0, _inherits3.default)(TabBar, _Component);

  function TabBar() {
    (0, _classCallCheck3.default)(this, TabBar);
    return (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(TabBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        {
          style: (0, _extends3.default)({}, styles.tabbar, style),
          className: PREFIX_CLS
        },
        children
      );
    }
  }]);
  return TabBar;
}(_react.Component);

TabBar.defaultProps = defaultProps;
TabBar.TabItem = _TabItem2.default;
exports.default = TabBar;