import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, Route, IndexRoute, browserHistory } from 'react-router-dom';
import Header from './components/Header';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render((
  <BrowserRouter>
    <div>
      {console.log(Route)}
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
