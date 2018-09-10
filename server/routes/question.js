const router = require('express').Router();
const Question = require('../db/models/question');

router.get('/', async (req, res) => {
  let questions;
  try {
    questions = await Question.find({});
  } catch (err) {
    res.status(404).send(err);
  }
  res.json(questions);
});


router.post('/', async (req, res) => {
  let newQuestion;
  try {
    newQuestion = await Question.create({
      title: 'Question Numba 1',
      answer: '42',
      body: 'What is the meaning of life?',
    });
  } catch (err) {
    res.status(404).send(err);
  }
  res.json(newQuestion);
});

module.exports = router;
