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
  title: null,
  children: null
};

var Panel = function (_Component) {
  (0, _inherits3.default)(Panel, _Component);

  function Panel() {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          contentStyle = _props.contentStyle,
          children = _props.children;

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
  }]);
  return Panel;
}(_react.Component);

Panel.defaultProps = defaultProps;
exports.default = Panel;