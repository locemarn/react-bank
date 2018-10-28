import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import urls from './utils/urls'


ReactDOM.render(
  <Router>
    <Route 
      path={urls.home.path}
      component={App}
    />
  </Router>,
  document.getElementById('root')
)


serviceWorker.unregister();
