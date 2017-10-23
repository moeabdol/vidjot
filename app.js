const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('INDEX');
});

app.get('/about', (req, res) => {
  res.send('ABOUT');
});

app.listen(PORT, err => {
  if (err) return console.log(err);
  console.log('Server started at port', PORT);
});
