import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Basic from './basic';
import BasicDoc from './doc/basic.md';

export default () =>
  storiesOf('Template', module)
    .add('Basic', withDocs(BasicDoc, () => <Basic />));
