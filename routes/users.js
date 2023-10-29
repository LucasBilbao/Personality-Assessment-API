const express = require('express');

const {
  register,
  getAllUsers,
  checkRegistrationBody,
  checkIfUserExists,
} = require('../controllers/users');

const router = express.Router();

router
  .route('/register')
  .post(checkRegistrationBody, checkIfUserExists, register);
router.route('/getAllUsers').get(getAllUsers);

module.exports = router;
