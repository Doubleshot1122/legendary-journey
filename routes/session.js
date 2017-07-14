const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/session.js');
const bcrypt = require('bcrypt-as-promised');

router.get('/', ctrl.checkSession);
router.post('/new' ctrl.newSession);
router.delete('/delete', ctrl.deleteSession);

module.exports = router;
