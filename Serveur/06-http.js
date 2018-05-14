const http = require('http');

function home(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end();
}

function notFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/html');
  res.write('<h2>Page not found</h2>');
  res.end();
}

const server = http.createServer((req, res) => {
    switch (req.url) {
      case '/':
        home(req, res);
        break;
      default:
        notFound(req, res);
    }
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('Server started');
});

