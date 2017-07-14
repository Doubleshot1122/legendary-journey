const Skill = require('../models/skills.js');

function index(req, res, next) {
  Skill.all().then(skill => res.json(skill))
}

function show(req, res, next) {
  const id = req.params.id;
  Skill.show(id).then(skill => res.json(skill))
}

module.exports = {index, show}
