import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import routes from '../routes';
import Home from './Home';
import agent from '../agent';

// class AppRoutes extends React.Component {
//
// }

const AppRoutes = () => (
  <BrowserRouter>
    <main>
      <Header />

      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes
            key={route.path}
            {...route}
          />
          // <Route key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>
    </main>
  </BrowserRouter>
);

export default AppRoutes;
