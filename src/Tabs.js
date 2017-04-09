// @flow

import React, { Component } from 'react';
import Tab from './Tab';
import TabBar from './TabBar';

const PREFIX_CLS = 'tabs-component';

export type TabsProps = {
  children: Array<Tab>;
  style?: Object;
  tabBarStyle?: Object;
  tabItemStyle?: Object;
  onTabChanged?: (index: number) => void;
}

const defaultProps = {
  style: null,
  tabBarStyle: null,
  tabItemStyle: null,
  onTabChanged: () => {},
};

class Tabs extends Component {
  static defaultProps = defaultProps
  static Tab = Tab

  state = {
    currentTabIndex: 0,
  }

  onTabClick = (index: number): void => {
    this.setState({ currentTabIndex: index });
    this.props.onTabChanged(index);
  }

  props: TabsProps

  render() {
    const { children, style, tabBarStyle, tabItemStyle } = this.props;
    const { currentTabIndex } = this.state;

    const tabsItems = children.map((tabItem, tabIndex) => {
      const { label } = tabItem.props;

      if (!label) {
        throw Error('Missing prop: "label"');
      }

      return (
        <TabBar.TabItem
          key={`tab-item-component-${label}`}
          style={tabItemStyle}
          label={label}
          onClick={() => {
            this.onTabClick(tabIndex);
          }}
          active={tabIndex === currentTabIndex}
        />
      );
    });

    const tab = children[currentTabIndex];

    return (
      <div
        style={style}
        className={PREFIX_CLS}
      >
        <TabBar style={tabBarStyle}>
          {tabsItems}
        </TabBar>

        {tab}
      </div>
    );
  }
}

export default Tabs;
