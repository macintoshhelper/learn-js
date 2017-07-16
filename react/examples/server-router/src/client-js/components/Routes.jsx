import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../constants/routes';

// import Home from './Home';
// import Login from './Login';

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

export default Routes;
