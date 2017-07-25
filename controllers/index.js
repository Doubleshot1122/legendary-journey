const path = require('path');

function index(req, res, next) {
  res.send('index.html', {root: path.join(__dirname, 'public')})
}

module.exports = {index}
