import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersList } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { offerListAction } from './store/actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(offerListAction(offersList));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
