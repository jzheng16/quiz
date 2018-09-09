const router = require('express').Router();
const Question = require('../db/models/question');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    res.status(404).send(err);
  }
});


router.post('/', async (req, res) => {
  try {
    let newQuestion = await Question.create({
      title: 'Question Numba 1',
      answer: '42',
      body: 'What is the meaning of life?'
    });
    res.json(newQuestion);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
