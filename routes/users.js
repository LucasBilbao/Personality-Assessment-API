const express = require('express');

const {
  register,
  getAllUsers,
  checkRegistrationBody,
  checkIfUserExists,
  login,
  checkLoginBody,
} = require('../controllers/users');

const router = express.Router();

router
  .route('/register')
  .post(checkRegistrationBody, checkIfUserExists, register);
router.route('/login').post(checkLoginBody, login);
router.route('/getAllUsers').get(getAllUsers);

module.exports = router;
