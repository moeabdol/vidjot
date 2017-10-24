const express = require('express');
const exphbs  = require('express-handlebars');
const path    = require('path');
const ideasRoutes = require('./routes/ideas');

const PORT = 3000;
const app = express();

// Configure static file directories
app.use(express.static(path.join(__dirname, 'node_modules')));

// Configure view engine
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Configure routes
app.use('/ideas', ideasRoutes);

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
