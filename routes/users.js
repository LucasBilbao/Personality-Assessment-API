const express = require('express');

const {
  register,
  checkRegistrationBody,
  checkIfUserExists,
} = require('../controllers/users');

const router = express.Router();

router
  .route('/register')
  .post(checkRegistrationBody, checkIfUserExists, register);

module.exports = router;
