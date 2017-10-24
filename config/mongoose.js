const mongoose = require('mongoose');
const config   = require('./config');

mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect(config.db, { useMongoClient: true })
  .then(() => console.log('Connected to', config.db))
  .catch(err => console.log(err));

module.exports = mongoose;
