'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX_CLS = 'tab-component';

var styles = {
  tab: {
    backgroundColor: '#fff',
    boxShadow: '0 0 4px rgba(0,0,0,.15)'
  },
  tabContent: {
    padding: '24px'
  },
  title: {
    marginTop: 0
  }
};

var defaultProps = {
  style: null,
  contentStyle: null,
  children: null
};

function Tab(_ref) {
  var style = _ref.style,
      contentStyle = _ref.contentStyle,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      style: (0, _extends3.default)({}, styles.tab, style),
      className: PREFIX_CLS
    },
    _react2.default.createElement(
      'div',
      { style: styles.tabContent },
      _react2.default.createElement(
        'div',
        { style: contentStyle },
        children
      )
    )
  );
}

Tab.defaultProps = defaultProps;

exports.default = Tab;