const express        = require('express');
const exphbs         = require('express-handlebars');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const flash          = require('connect-flash');
const path           = require('path');
const ideasRoutes    = require('./routes/ideas');

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

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure method-override middleware
app.use(methodOverride('_method'));

// Configure express-session middlware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Configure connect-flash middlware
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');

  next();
});

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
