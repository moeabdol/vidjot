const ensureAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', 'Not authorized.');
    return res.redirect('/users/signin');
  }

  next();
};

module.exports = {
  ensureAuthenticated
};
