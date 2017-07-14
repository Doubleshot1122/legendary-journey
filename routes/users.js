const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.js');

router.get('/', ctrl.index);
router.post('/new', ctrl.create);
router.get('/:id', ctrl.show);

module.exports = router;
