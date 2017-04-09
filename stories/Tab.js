/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import backgrounds from 'react-storybook-addon-backgrounds';
import Tab from '../src/Tab';

storiesOf('Tab', module)
.addDecorator(backgrounds([
  { name: 'black', value: '#262626', default: true },
  { name: 'white', value: '#ffffff' },
]))
.add('Tab', () => (
  <Tab style={{ margin: '24px' }}>
    <h3 style={{ marginTop: 0 }}>Title</h3>
    <div>
      Content
    </div>
  </Tab>
));
