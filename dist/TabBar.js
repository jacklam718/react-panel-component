'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
  style: null
};

function TabBar(_ref) {
  var children = _ref.children,
      style = _ref.style;

  return _react2.default.createElement(
    'div',
    {
      style: (0, _extends3.default)({}, styles.tabbar, style),
      className: PREFIX_CLS
    },
    children
  );
}

TabBar.TabItem = _TabItem2.default;
TabBar.defaultProps = defaultProps;

exports.default = TabBar;