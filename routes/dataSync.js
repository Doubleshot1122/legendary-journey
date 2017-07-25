const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/datasync.js');

router.get('/stories', ctrl.stories);

module.exports = router;
