import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//redux store
import configureStore from './reduxStore/configureStore';
import { Provider } from 'react-redux';

let store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
