const Quest = require('../models/quests.js');

function index(req, res, next) {
  Quest.all().then(quest => res.json(quest))
}

function show(req, res, next) {
  const id = req.params.id;
  Quest.show(id).then(quest => res.json(quest))
}

module.exports = {index, show}
