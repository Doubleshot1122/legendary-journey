const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/skills.js');

router.get('/', ctrl.index);
// router.post('/new', ctrl.create);
router.get('/:id', ctrl.show);

module.exports = router;
