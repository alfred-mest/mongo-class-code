const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRouter = require('./controllers/note');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URI, config)
  .then(() => {
    console.log('You have connected successfully to your database');
  })
  .catch(err => {
    console.error('Something bad happened to your db connection', err);
  });

app.use(bodyParser.json());
app.use('/note', noteRouter);


app.listen(process.env.PORT, () => {
  console.log('Express app is running');
});
