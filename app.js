const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const quizzesRouter = require('./routes/quizzes');
const usersRouter = require('./routes/users');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/images', express.static(`${__dirname}/images`));
app.use(
  cors({
    origins: [
      'http://localhost:1234',
      'http://127.0.0.1:5500/',
      'http://localhost:5300',
    ],
  }),
);

const ENDPOINTS = { QUIZZES: '/api/v1/quizzes' };

app.use(ENDPOINTS.QUIZZES, quizzesRouter);

module.exports = app;
