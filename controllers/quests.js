const Quest = require('../models/quests.js');

function index(req, res, next) {
  Quest.all().then(quest => res.json(quest))
}

function show(req, res, next) {
  const id = req.params.id;
  Quest.show(id).then(quest => res.json(quest))
}

function showStories(req, res, next) {
  console.log("===Controller====");
  Quest.showStories().then(stories => res.json(stories))
}

module.exports = {index, show, showStories}
