/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import { configure } from '@kadira/storybook';

function loadStories() {
  // eslint-disable-next-line
  require('../stories');
}

configure(loadStories, module);
