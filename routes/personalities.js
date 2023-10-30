const express = require('express');
const {
  getPersonality,
  checkPersonalityInBody,
} = require('../controllers/personalities');

const router = express.Router();

router.route('/getPersonalities').post(checkPersonalityInBody, getPersonality);

module.exports = router;
