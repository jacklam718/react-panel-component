'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX_CLS = 'tab-item-component';

var styles = {
  tab: {
    flex: 1,
    textAlign: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    textDecoration: 'none',
    border: '10px',
    color: '#000',
    backgroundColor: '#fff',
    height: '50px',
    cursor: 'pointer'
  },
  tabActive: {
    backgroundColor: '#cccccc'
  }
};

function TabItem(_ref) {
  var label = _ref.label,
      style = _ref.style,
      activeStyle = _ref.activeStyle,
      onClick = _ref.onClick,
      active = _ref.active;

  var tabStyle = styles.tab;

  if (active) {
    tabStyle = (0, _extends3.default)({}, tabStyle, styles.tabActive, activeStyle);
  }

  return _react2.default.createElement(
    'button',
    {
      style: (0, _extends3.default)({}, tabStyle, style),
      className: PREFIX_CLS,
      onClick: onClick
    },
    label
  );
}

TabItem.defaultProps = {
  onClick: function onClick() {},
  style: null,
  activeStyle: null,
  active: false
};

exports.default = TabItem;