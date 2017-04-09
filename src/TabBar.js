// @flow

import React, { Component } from 'react';
import TabItem from './TabItem';

const PREFIX_CLS = 'tabbar-component';
const styles = {
  tabbar: {
    backgroundColor: '#fff',
    display: 'flex',
  },
};

export type TabBarProps = {
  children: Array<TabItem>,
  style?: Object,
}

const defaultProps = {
  style: {},
};

class TabBar extends Component {
  static defaultProps = defaultProps
  static TabItem = TabItem

  props: TabBarProps

  render() {
    const { children, style } = this.props;
    return (
      <div
        style={{ ...styles.tabbar, ...style }}
        className={PREFIX_CLS}
      >
        {children}
      </div>
    );
  }
}

export default TabBar;
