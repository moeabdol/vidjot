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

  res.send('passed');
};

module.exports = {
  signin,
  signup,
  create
};
