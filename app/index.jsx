import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import RouteMap from './router/routeMap.jsx'
import fn from './redux-demo.jsx'
import "./index.css";
import "./index.less";
fn();


ReactDOM.render(<RouteMap history={hashHistory}/>,document.getElementById('app'));
