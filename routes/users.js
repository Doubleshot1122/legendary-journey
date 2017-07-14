const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.js');

router.get('/', ctrl.index);
router.post('/new', ctrl.create);

module.exports = router;
