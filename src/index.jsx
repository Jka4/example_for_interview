// @ts-nocheck
// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/steelKiwi">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
