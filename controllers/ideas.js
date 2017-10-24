const Idea = require('../models/idea');

const index = (req, res) => {
  Idea.find()
    .sort({ date: 'desc' })
    .then(ideas => res.render('ideas/index', { ideas }))
    .catch(err => console.log(err));
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

  new Idea({
    title: req.body.title,
    details: req.body.details
  }).save()
    .then(() => {
      req.flash('success', 'Idea created successfully.');
      res.redirect('/ideas');
    })
    .catch(err => console.log(err));
};

const edit = (req, res) => {
  Idea.findOne({ _id: req.params.id })
    .then(idea => res.render('ideas/edit', { idea }))
    .catch(err => console.log(err));
};

const update = (req, res) => {
  Idea.findOne({ _id: req.params.id })
    .then(idea => {
      let errors = [];

      if (!req.body.title) errors.push({ text: 'Please add a title.' });
      if (!req.body.details) errors.push({ text: 'Please add some details.' });

      if (errors.length > 0) return res.render('ideas/edit', {
        errors: errors,
        idea: idea
      });

      idea.title = req.body.title;
      idea.details = req.body.details;

      idea.save()
        .then(() => {
          req.flash('success', 'Idea updated successfully.');
          res.redirect('/ideas');
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

const destroy = (req, res) => {
  Idea.findByIdAndRemove(req.params.id)
    .then(() => {
      req.flash('success', 'Idea deleted successfully.');
      res.redirect('/ideas');
    })
    .catch(err => console.log(err));
};

module.exports = {
  index,
  add,
  create,
  edit,
  update,
  destroy
};
