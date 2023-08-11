const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ezgamingworld_development')
  .then(() => {
    console.log('db is connected');
  })
  .catch((error) => {
    console.log('error in connecting db:', error.message);
  });

const db = mongoose.connection;

module.exports = db;
