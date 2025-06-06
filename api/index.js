const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

module.exports = app;
