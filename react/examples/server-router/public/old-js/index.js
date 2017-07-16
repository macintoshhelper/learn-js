import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
// import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
