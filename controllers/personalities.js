const fs = require('fs');

const PERSONALITIES_FILE_PATH = `${__dirname}/../data/personalities.json`;

const personalities = JSON.parse(
  fs.readFileSync(PERSONALITIES_FILE_PATH, 'utf-8'),
);

const sortAndFilterBy = (arr, sorter) => {
  const sortedAndFiltered = [];

  for (let i = 0; i < sorter.length; ++i) {
    const found = arr.find((item) => sorter[i] === item.personalityCode);
    if (!found) {
      continue;
    }

    sortedAndFiltered.push(found);
  }

  return sortedAndFiltered;
};

exports.checkPersonalityInBody = (req, res, next) => {
  const isBodyComplete =
    req.body.personalityCodes && req.body.personalityCodes?.length !== 0;
  if (!isBodyComplete) {
    return res.status(400).json({
      status: 'fail',
      message: 'Request must contain personality codes array',
    });
  }
  next();
};

exports.getPersonality = (req, res) => {
  try {
    const { personalityCodes } = req.body;
    const personalitiesToSend = sortAndFilterBy(
      personalities,
      personalityCodes,
    );

    res.status(200).json({
      status: 'success',
      personalities: personalitiesToSend,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
