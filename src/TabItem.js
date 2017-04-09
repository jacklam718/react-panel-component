// @flow

import React from 'react';

const PREFIX_CLS = 'tab-item-component';
const styles = {
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
    cursor: 'pointer',
  },
  tabActive: {
    backgroundColor: '#cccccc',
  },
};

export type TabItemProps = {
  onClick?: () => void;
  style?: Object;
  active?: boolean;
  activeStyle?: Object;
  label: any;
}

function TabItem({ label, style, activeStyle, onClick, active }: TabItemProps) {
  let tabStyle = styles.tab;

  if (active) {
    tabStyle = {
      ...tabStyle,
      ...styles.tabActive,
      ...activeStyle,
    };
  }

  return (
    <button
      style={{ ...tabStyle, ...style }}
      className={PREFIX_CLS}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

TabItem.defaultProps = {
  onClick: () => {},
  style: null,
  activeStyle: null,
  active: false,
};

export default TabItem;
