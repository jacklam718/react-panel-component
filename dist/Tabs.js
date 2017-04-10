'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX_CLS = 'tabs-component';

var defaultProps = {
  style: null,
  tabBarStyle: null,
  tabItemStyle: null,
  onTabChanged: function onTabChanged() {}
};

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTabIndex: 0
    }, _this.onTabClick = function (index) {
      _this.setState({ currentTabIndex: index });
      _this.props.onTabChanged(index);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          style = _props.style,
          tabBarStyle = _props.tabBarStyle,
          tabItemStyle = _props.tabItemStyle;
      var currentTabIndex = this.state.currentTabIndex;


      var tabsItems = children.map(function (tabItem, tabIndex) {
        var label = tabItem.props.label;


        if (!label) {
          throw Error('Missing prop: "label"');
        }

        return _react2.default.createElement(_TabBar2.default.TabItem, {
          key: 'tab-item-component-' + label,
          style: tabItemStyle,
          label: label,
          onClick: function onClick() {
            _this2.onTabClick(tabIndex);
          },
          active: tabIndex === currentTabIndex
        });
      });

      var tab = children[currentTabIndex];

      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: PREFIX_CLS
        },
        _react2.default.createElement(
          _TabBar2.default,
          { style: tabBarStyle },
          tabsItems
        ),
        tab
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = defaultProps;
Tabs.Tab = _Tab2.default;
exports.default = Tabs;