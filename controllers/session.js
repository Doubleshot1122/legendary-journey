const Session = require('../models/session.js');
const bcrypt = require('bcrypt-as-promised');

function checkSession(req, res, next) {
  if (req.session.userId !== undefined) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
}

function newSession(req, res, next) {

}

function deleteSession(req, res, next) {
  req.session = null;
  res.status(200).json(true);
}

module.exports = {checkSession, newSession, deleteSession}
