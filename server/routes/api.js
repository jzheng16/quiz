const api = require('express').Router();
console.log('Hey, Im here!')

api
  .use('/question', require('./question'));

api.use((req, res) => res.status(404).end());
module.exports = api;
