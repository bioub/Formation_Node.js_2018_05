const http = require('http');
const app = require('./app');

const server = http.createServer(app);
// https.createServer(app, {cert: fs.readFileSync('key.cert')});
server.on('error', (err) => {
  console.log(err); // TODO winston, log4js, debug
});

server.listen(8080, () => {
  console.log('Server started');
}); // TODO config
