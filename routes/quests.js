const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quests.js');

router.get('/', ctrl.index);
// router.post('/new', ctrl.create);
router.get('/projects', ctrl.showProjects)
router.get('/stories', ctrl.showStories);
router.get('/:id', ctrl.show);

module.exports = router;
