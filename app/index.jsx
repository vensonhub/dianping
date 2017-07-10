import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore.js'
import User from './containers/User'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <User/>
  </Provider>
  ,document.getElementById('app'));
