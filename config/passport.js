const LocalStrategy = require('passport-local').Strategy;
const mongoose      = require('../config/mongoose');
const bcrypt        = require('bcryptjs');
const User          = require('../models/user');

module.exports = function(passport) {
  passport.use('local', new LocalStrategy({ usernameField: 'email' },
    (email, password, done) => {
      console.log(email);
    }));
};
