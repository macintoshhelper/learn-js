const http = require('http');
const app = require('./app');

const port = process.env.port || 3000;

// app.set('port', port);

const server = http.createServer(app);


const onListening = () => {
  const address = server.address();
  const bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
  console.log(`Listening on: ${bind}`);
};


server.listen(port);

server.on('listening', onListening);
