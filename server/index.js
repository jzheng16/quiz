const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const Articles = require('./models/articles');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27018/quiz", { useNewUrlParser: true });
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('we are open for business!');
});

app.get('/example', async (req, res) => {
  try{
    const articles = await Articles.find({})
    res.send(articles);
  } catch (err) {
    throw err
    }
})
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
});

app.post('/examplePOST', async (req, res) => {
  try{
    await Articles.create({
    title: 'Article Two',
    author: 'Joey',
    body: 'This is testing mongo'
    })
  } catch (err) {
  throw err
  }
  res.send(article);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
