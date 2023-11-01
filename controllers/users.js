const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const USERS_FILE_PATH = `${__dirname}/../data/users.json`;
const users = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf-8'));

exports.checkRegistrationBody = (req, res, next) => {
  const isBodyComplete = !!(
    req.body.userName &&
    req.body.password &&
    req.body.personalities
  );
  if (!isBodyComplete) {
    return res.status(400).json({
      status: 'fail',
      message:
        "The registration requires both 'userName' and 'password' parameters",
    });
  }
  next();
};

exports.checkLoginBody = (req, res, next) => {
  const isBodyComplete = !!(req.body.userName && req.body.password);
  if (!isBodyComplete) {
    return res.status(400).json({
      status: 'fail',
      message:
        "The registration requires both 'userName' and 'password' parameters",
    });
  }
  next();
};

exports.checkIfUserExists = (req, res, next) => {
  const isUserListed = users.some(
    (user) => user.userName === req.body.userName,
  );
  if (isUserListed) {
    return res.status(400).json({
      status: 'fail',
      message: 'User already exists',
    });
  }
  next();
};

exports.register = (req, res) => {
  try {
    const newUser = req.body;
    newUser.id = uuidv4();

    users.push(newUser);
    fs.writeFile(USERS_FILE_PATH, JSON.stringify(users), (error) => {
      if (error) {
        throw error;
      }

      res.status(201).json({
        status: 'success',
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.login = (req, res) => {
  try {
    const requestedUser = users.find(
      (user) =>
        user.userName === req.body.userName &&
        user.password === req.body.password,
    );

    if (!requestedUser) {
      throw new Error('User was not found');
    }

    res.status(200).json({
      status: 'success',
      user: requestedUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllUsers = (_, res) => {
  try {
    res.status(200).json({
      status: 'success',
      users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
