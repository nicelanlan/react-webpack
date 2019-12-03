import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { Provider } from 'react-redux';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

import configureStore from '../src/store';

const messages = {
  en: { 'button.label': 'Click me!' },
  zh: { 'button.label': 'Klick mich!' },
};
const getMessages = locale => messages[locale];

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

addDecorator(withIntl);
setIntlConfig({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  getMessages,
});
const store = configureStore();

addDecorator(render => <Provider store={store}>{render()}</Provider>);

const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: 'FMS',
  url: 'https://portal.dev.ecf.cloud/',
  addonPanelInRight: true,
});

configure(loadStories, module);
