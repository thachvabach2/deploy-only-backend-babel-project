"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./routes/web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require("dotenv").config();
// import logger from "../logger";

// logger.log('info', 'Hello created logger file!', { 'foo': 'bar' });
// logger.info('Hello created logger file!', { 'foo': 'bar' });

var app = (0, _express["default"])();

//config view Engine
(0, _viewEngine["default"])(app);

//init all web routes
(0, _web["default"])(app);
app.get('/hoidanit', function (req, res) {
  setTimeout(function () {
    throw new Error('We crashed!!!!!');
  }, 10);
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("HoiDanIT app is running at the port ".concat(port));
});