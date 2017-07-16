import React from 'react';
import { StaticRouter as BrowserRouter, matchPath } from 'react-router';
import Header from '../client-js/components/Header';

const { renderToString } = require('react-dom/server');

const routes = require('../client-js/constants/routes').default;

const render = (req, res, next) => {
  routes.some((route) => {
    const match = matchPath(req.url, route.path);
    if (!match) {
      next();
      return true;
    }

    const context = {};

    const html = renderToString(
      <BrowserRouter location={req.url} context={context}>
        <Header />
      </BrowserRouter>
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return true;
    }
    res.render('render', { html });
    return true;
  });
  // matchPath({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
  //   // in case of error display the error message
  //   if (err) {
  //     return res.status(500).send(err.message);
  //   }
  //
  //   // in case of redirect propagate the redirect to the browser
  //   if (redirectLocation) {
  //     return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //   }
  //
  //   // generate the React markup for the current route
  //   let markup;
  //   if (renderProps) {
  //     console.log(renderProps);
  //     // if the current route matched we have renderProps
  //     markup = renderToString(<RouterContext {...renderProps} />);
  //   } else {
  //     // otherwise we can render a 404 page
  //
  //     // markup = renderToString(<NotFoundPage/>);
  //     // res.status(404);
  //     return next();
  //   }
  //
  //   // render the index template with the embedded React markup
  //   return res.render('index', { markup });
  // });
};

module.exports = render;
