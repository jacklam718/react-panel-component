/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import backgrounds from 'react-storybook-addon-backgrounds';
import TabBar from '../src/TabBar';

storiesOf('TabBar', module)
.addDecorator(backgrounds([
  { name: 'black', value: '#262626', default: true },
  { name: 'white', value: '#ffffff' },
]))
.add('TabBar', () => (
  <TabBar
    title="Title"
    style={{ margin: '24px' }}
  >
    <TabBar.TabItem label="Tab 1" key="tab-1" />
    <TabBar.TabItem label="Tab 2" key="tab-2" />
    <TabBar.TabItem label="Tab 2" key="tab-3" />
  </TabBar>
));
