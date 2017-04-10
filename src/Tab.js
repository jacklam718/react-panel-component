// @flow

import React from 'react';

const PREFIX_CLS = 'tab-component';
const styles = {
  tab: {
    backgroundColor: '#fff',
  },
  tabContent: {
    padding: '24px',
  },
  title: {
    marginTop: 0,
  },
};

export type TabProps = {
  style?: Object;
  contentStyle?: Object;
  children?: any;
}

const defaultProps = {
  style: null,
  contentStyle: null,
  children: null,
};

function Tab({ style, contentStyle, children }: TabProps) {
  return (
    <div
      style={{ ...styles.tab, ...style }}
      className={PREFIX_CLS}
    >
      <div style={styles.tabContent}>
        <div style={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

Tab.defaultProps = defaultProps;

export default Tab;
