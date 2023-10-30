const fs = require('fs');

const PERSONALITIES_FILE_PATH = `${__dirname}/../data/personalities.json`;

const personalities = JSON.parse(
  fs.readFileSync(PERSONALITIES_FILE_PATH, 'utf-8'),
);

exports.checkPersonalityInBody = (req, res, next) => {
  const isBodyComplete =
    req.body.personalities || req.body.personalities?.length === 0;
  if (!isBodyComplete) {
    return res.status(400).json({
      status: 'fail',
      message: 'Request must contain personalities array',
    });
  }
  next();
};

exports.getPersonality = (req, res) => {
  try {
    const { personalities: personalityCodes } = req.body;
    const personalitiesToSend = personalities.filter((personality) =>
      personalityCodes.includes(personality.personalityCode),
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
