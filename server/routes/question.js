const router = require('express').Router();
const Question = require('../db/models/question');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find({});
    res.send(questions);
  } catch (err) {
    throw err;
  }
});


router.post('/', (req, res) => {
  Question.create({
    title: 'Question Numba 1',
    answer: '42',
    body: 'What is the meaning of life?'
  }, (err, newQuestion) => {
    if (err) console.log('err');
    res.json(newQuestion);
  });
});

module.exports = router;