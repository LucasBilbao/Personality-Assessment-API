const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const quizzesRouter = require('./routes/quizzes');
const usersRouter = require('./routes/users');
const personalitiesRouter = require('./routes/personalities');

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

const ENDPOINTS = {
  QUIZZES: '/api/v1/quizzes',
  USERS: '/api/v1/users',
  PERSONALITIES: '/api/v1/personalities',
};

app.use(ENDPOINTS.QUIZZES, quizzesRouter);
app.use(ENDPOINTS.USERS, usersRouter);
app.use(ENDPOINTS.PERSONALITIES, personalitiesRouter);

module.exports = app;
