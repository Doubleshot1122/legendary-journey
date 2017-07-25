const DataSync = require('../models/datasync.js');

function stories(req, res, next) {
  DataSync.projects()
  res.json({done: "finished"})
}

module.exports = {stories}
