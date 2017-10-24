const Idea = require('../models/idea');

const index = (req, res) => {
  res.send('ideas index');
};

module.exports = {
  index
};
