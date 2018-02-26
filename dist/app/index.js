'use strict';

var express = require('express');
var bot = require('./helpers/bot');
var moment = require('moment');

var startup = moment();
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

// Main page
app.get('/', function (req, res) {
  res.render('pages/dashboard', {
    uptime: startup.diff(moment(), 'days')
  });
});

// Check on whether the bot is functioning
app.get('/healthcheck', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ uptime: startup.diff(moment(), 'days') }));
});

// Actual Bot Execution
bot.run();

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map