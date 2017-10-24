const mongoose = require('../config/mongoose');
const bcrypt = require('bcryptjs');

const SALT_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(SALT_FACTOR)
      .then(salt => {
        bcrypt.hash(this.password, salt)
          .then(hash => {
            this.password = hash;
            next();
          })
          .catch(err => next(err));
      })
      .catch(err => next(err));
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
