const mongoose = require('mongoose');
require('dotenv').config;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/all-things-tech',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  {
    JWTSecret: process.env.JWT_SECRET
  },
);

module.exports = mongoose.connection;
