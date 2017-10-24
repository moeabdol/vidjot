const mongoose = require('../config/mongoose');

const IdeaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Idea', IdeaSchema);
