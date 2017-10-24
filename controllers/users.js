const signin = (req, res) => {
  res.render('users/signin');
};

const signup = (req, res) => {
  res.render('users/signup');
};

module.exports = {
  signin,
  signup
};
