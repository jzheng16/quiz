const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const morgan = require('morgan');
const db = require('./db');
const api = require('./routes/api');

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we are open for business!');
});

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Serve api
app.use('/api', api);

// Error handling just in case something broke
app.use((err, req, res) => {
  console.log(err.stack);
  res.status(500).send(err.message || 'Something broke!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
