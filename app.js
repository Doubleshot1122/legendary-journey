// if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
//   require('dotenv').config();
// }

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');

const app = express();
app.disable('x-powered-by');

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cookieSession({
//   name: 'legendary-journey',
//   secret: process.env.SESSION_SECRET,
//   secure: app.get('env') === 'production'
// }));
app.use(express.static(path.join(__dirname, 'public')));


const users = require('./routes/users');
const quests = require('./routes/quests');
const skills = require('./routes/skills');
const dashboard = require('./routes/dashboard');
const datasync = require('./routes/datasync');

app.use('/api/users', users);
app.use('/api/quests', quests);
app.use('/api/skills', skills);
app.use('/api/dashboard', dashboard);
app.use('/api/datasync', datasync);
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json(err);
});

module.exports = app;
