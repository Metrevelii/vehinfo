import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesMain from './routes';

import global_ru from './Translations/ru/global.json';
import global_az from './Translations/az/global.json';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import ReduxStore from './store';

import './globals.css';


i18next.init({
  interpolation: {escapeValue: false},
  lng: "az",
  resources: {
    az: {
      global: global_az
    },
    ru: {
      global: global_ru
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>

      <I18nextProvider i18n={i18next}>

        <RoutesMain />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

