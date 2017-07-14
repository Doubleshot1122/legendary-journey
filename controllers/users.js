const User = require('../models/users.js');
const bcrypt = require('bcrypt-as-promised');

function create(req, res, next) {
  bcrypt.hash(req.body.hashed_password, 12)
  .then(hashed_password => {
    let body = req.body;
    body.hashed_password = hashed_password;

    User.create(body).then(result => {
      const user = result[0]
      delete user.hashed_password;
      res.json(user)
    })
  })
}

function index(req, res, next) {
  User.all().then(user => res.json(user))
}

function show(req, res, next) {
  const id = req.params.id;
  User.show(id).then(user => res.json(user))
}

module.exports = {create, index, show}
