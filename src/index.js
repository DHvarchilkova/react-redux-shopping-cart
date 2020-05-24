import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

import './index.css';
import App from './App';


ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'));

