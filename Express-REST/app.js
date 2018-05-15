const express = require('express');
const contactRoutes = require('./routes/contact');

const mongoose = require('mongoose');
// TODO utiliser des mocks (dans les tests) et déplacer dans index.js
mongoose.connect('mongodb://localhost/test');

const app = express();

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.use('/api/contacts', contactRoutes);

// 404
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found',
  });
});


// 500
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json(err);
});

module.exports = app;
