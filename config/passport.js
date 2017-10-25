const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');

module.exports = function(passport) {
  passport.use('local', new LocalStrategy({ usernameField: 'email' },
    (email, password, done) => {
      User.findOne({ email: email })
        .then(user => {
          if (!user) return done(null, false, { message: 'No user found.' });

          user.comparePassword(password, (err, isMatch) => {
            if (err) return console.log(err);

            if (!isMatch) return done(null, false, {
              message: 'Password incorrect.'
            });

            done(null, user, { message: 'Signed in successfully.' });
          });
        })
        .catch(err => done(err));
    }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
