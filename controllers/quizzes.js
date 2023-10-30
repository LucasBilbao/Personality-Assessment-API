const fs = require('fs');

const QUIZZES_FILE_PATH = `${__dirname}/../data/quizzes.json`;
const quizzes = JSON.parse(fs.readFileSync(QUIZZES_FILE_PATH, 'utf-8'));

exports.getFictionals = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      quiz: quizzes.fictionals,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAnimals = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      quiz: quizzes.animals,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getFacebookers = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      quiz: quizzes.facebookers,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getCelebrities = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      quiz: quizzes.celebrities,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOrnaments = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      quiz: quizzes.ornaments,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
