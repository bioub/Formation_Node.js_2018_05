const net = require('net');

const socket = net.createConnection(80, 'www.google.fr');

socket.pipe(process.stdout);

socket.once('connect', () => {
  socket.write('GET /search?q=Node.js HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.write('\r\n');
});
