const Idea = require('../models/idea');

const index = (req, res) => {
  res.send('ideas index');
};

const add = (rea, res) => {
  res.render('ideas/add');
};

module.exports = {
  index,
  add
};
