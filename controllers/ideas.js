const Idea = require('../models/idea');

const index = (req, res) => {
  res.send('ideas index');
};

const add = (rea, res) => {
  res.render('ideas/add');
};

const create = (req, res) => {
  let errors = [];

  if (!req.body.title) errors.push({ text: 'Please add a title.' });
  if (!req.body.details) errors.push({ text: 'Please add some details.' });

  if (errors.length > 0) return res.render('ideas/add', {
    errors: errors,
    title: req.body.title,
    details: req.body.details
  });

  const newUserIdea = {
    title: req.body.title,
    details: req.body.details
  };

  new Idea(newUserIdea).save()
    .then(() => res.redirect('/ideas'))
    .catch(err => console.log(err));
};

module.exports = {
  index,
  add,
  create
};
