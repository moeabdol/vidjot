const express = require('express');
const exphbs = require('express-handlebars');

const PORT = 3000;
const app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  const title = 'welcome';
  res.render('index', { title: title });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(PORT, err => {
  if (err) return console.log(err);
  console.log('Server started at port', PORT);
});
