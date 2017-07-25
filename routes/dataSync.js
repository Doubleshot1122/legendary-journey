const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/dataSync.js');

router.get('/stories', ctrl.stories);

module.exports = router;
