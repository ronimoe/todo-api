const mongoose = require('mongoose');

// Promise Library
mongoose.Promise = global.Promise;
// Connect to DB
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };