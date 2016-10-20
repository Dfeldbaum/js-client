var express = require('express');
var ctrl = express.Router();

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  res.render('index', { title: 'NSATRACKER.com' });
});

// get users
ctrl.get('/view', function(req, res, next) {
	res.render('users', {})
})

module.exports = ctrl;
