import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
// import App from './components/App';


ReactDOM.render((
  <BrowserRouter>
    <Header />
  </BrowserRouter>
  ), document.getElementById('root'));
