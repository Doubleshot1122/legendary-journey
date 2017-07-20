const Dashboard = require('../models/dashboard.js');

function showUser(req, res, next) {
  const id = req.params.id;
  Dashboard.showUser(id).then(user => {
    console.log("=====controller=====");
    console.log("user", user);
    res.json(user)
  })
}

module.exports = {showUser}
