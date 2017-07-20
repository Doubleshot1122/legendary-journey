const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/dashboard.js');

router.get('/:id', ctrl.showUser);

module.exports = router;
