const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz', { useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;
