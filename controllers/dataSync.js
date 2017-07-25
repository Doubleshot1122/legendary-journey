const DataSync = require('../models/dataSync.js');

function stories(req, res, next) {
  DataSync.projects()
  res.json({done: "finished"})
  // .then(stories => {
  //   res.json(stories)
  // })
}

module.exports = {stories}
