const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ezgamingworld_development')
  .then(() => {
    console.log('db is connected');
  })
  .catch((error) => {
    console.log('error in connecting db:', error.message);
  });

const db = mongoose.connection;

module.exports = db;
