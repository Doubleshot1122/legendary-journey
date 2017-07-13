const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/index.js')

/* GET home page. */

router.get('/', ctrl.index);
// router.get('/', (req, res, next) =>  {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
