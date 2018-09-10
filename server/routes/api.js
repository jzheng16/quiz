const api = require('express').Router();


api
  .use('/question', require('./question'));

api.use((req, res) => res.status(404).end());
module.exports = api;
