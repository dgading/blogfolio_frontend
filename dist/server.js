'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _App = require('./components/App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
var server = new _http.Server(app);

//use ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

//define static assets folder
app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

//render the index for ever non-matched route
app.get('*', function (req, res) {
  var markup = '';
  var status = 200;
  var context = {};
  markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App.App, null)
  ));

  if (context.url) {
    return res.redirect(302, context.url);
  }

  if (context.is404) {
    status = 404;
  }

  return res.status(status).render('index', { markup: markup });
});

//start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
server.listen(port);
console.log('I\'m watching you on port: ' + port);
