const User = require('../models/user');
// const passport = require('passport');

const signin = (req, res) => {
  res.render('users/signin');
};

const signup = (req, res) => {
  res.render('users/signup');
};

const create = (req, res) => {
  let errors = [];

  if (!req.body.name) errors.push({ text: 'Please add a name.' });
  if (!req.body.email) errors.push({ text: 'Please add an EMail.' });
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match.' });
  }
  if (req.body.password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters.' });
  }

  if (errors.length > 0) {
    return res.render('users/signup', {
      errors: errors,
      name: req.body.name,
      email: req.body.email
    });
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        req.flash('error', 'Email already exists.');
        return res.redirect('/users/signup');
      }

      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        req.flash('success', 'User signed up successfully.');
        res.redirect('/users/signin');
      }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

module.exports = {
  signin,
  signup,
  create
};
