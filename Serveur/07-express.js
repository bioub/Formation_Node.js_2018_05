const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bonjour');
});

app.get('/contact', (req, res) => {
  res.send('<h2>Contactez-nous</h2>');
});

app.listen(8080, () => {
  console.log('Server started');
});
