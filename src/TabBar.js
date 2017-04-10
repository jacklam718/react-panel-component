// @flow

import React from 'react';
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
  style: null,
};

function TabBar({ children, style }: TabBarProps) {
  return (
    <div
      style={{ ...styles.tabbar, ...style }}
      className={PREFIX_CLS}
    >
      {children}
    </div>
  );
}

TabBar.TabItem = TabItem;
TabBar.defaultProps = defaultProps;

export default TabBar;
