import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore.js'
import User from './containers/User'

// 测试 fetch 的功能
import { getData, postData } from './fetch/test.js'
getData();
postData();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <User/>
  </Provider>
  ,document.getElementById('app'));
