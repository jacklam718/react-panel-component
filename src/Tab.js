// @flow

import React, { Component } from 'react';

const PREFIX_CLS = 'tab-component';
const styles = {
  tab: {
    backgroundColor: '#fff',
    boxShadow: '0 0 4px rgba(0,0,0,.15)',
  },
  tabContent: {
    padding: '24px',
  },
  title: {
    marginTop: 0,
  },
};

type Props = {
  style?: Object;
  contentStyle?: Object;
  children?: any;
}

const defaultProps = {
  style: null,
  contentStyle: null,
  title: null,
  children: null,
};

class Panel extends Component {
  static defaultProps = defaultProps
  props: Props

  render() {
    const { style, contentStyle, children } = this.props;
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
}

export default Panel;
