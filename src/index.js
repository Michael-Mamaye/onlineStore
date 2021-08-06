import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import Thunk from 'redux-thunk'
import { applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(allReducers,composeWithDevTools(applyMiddleware(Thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


