/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import backgrounds from 'react-storybook-addon-backgrounds';

import Tabs from '../src/Tabs';

storiesOf('Tabs', module)
.addDecorator(backgrounds([
  { name: 'black', value: '#262626', default: true },
  { name: 'white', value: '#ffffff' },
]))
.add('Tabs', () => (
  <Tabs
    title="Title"
    style={{ margin: '24px' }}
  >
    <Tabs.Tab label="Tab 1">
      <h3 style={{ marginTop: 0 }}>Title This Tab 1</h3>
      <div>
        Content
      </div>
    </Tabs.Tab>

    <Tabs.Tab label="Tab 2">
      <h3 style={{ marginTop: 0 }}>Title This Tab 2</h3>
      <div>
        Content
      </div>
    </Tabs.Tab>

    <Tabs.Tab label="Tab 3">
      <h3 style={{ marginTop: 0 }}>Title This Tab 3</h3>
      <div>
        Content
      </div>
    </Tabs.Tab>
  </Tabs>
));
