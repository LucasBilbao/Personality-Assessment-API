const express = require('express');

const {
  getFictionals,
  getAnimals,
  getFacebookers,
  getCelebrities,
  getOrnaments,
} = require('../controllers/quizzes');

const router = express.Router();

router.route('/fictionals').get(getFictionals);
router.route('/animals').get(getAnimals);
router.route('/facebookers').get(getFacebookers);
router.route('/celebrities').get(getCelebrities);
router.route('/ornaments').get(getOrnaments);

module.exports = router;
