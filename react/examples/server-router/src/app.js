const path = require('path');
const express = require('express');

const router = require('./routes');  // Import router map (list of routes)

const app = express();  // Set app to express object

app.set('views', path.join(__dirname, 'views'));  // Set express to use the folder 'views' as the views directory

app.set('view engine', 'hbs');  // Set express's view engine to 'hbs' (handlebars) - you can use other templating engines like Jade

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);  // Tell Express to use the router (import the list of routes, and their handlers)


// The below function will run if none of the routes in 'router' matched
// - so the route was not found
app.use((req, res) => {
  const err = new Error('Error 404: Page not found');
  err.status = 404;
  res.status(err.status);
  res.send(err);
});

// Setup an error renderer
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Export app for other packages to use it
module.exports = app;
