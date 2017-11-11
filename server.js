var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var getAPI = require('./app/routing/apiRoutes.js');
var getHTML = require('./app/routing/htmlRoutes.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(getAPI);
app.use(getHTML);

//app.use(express.static('app/public'));

app.listen(port, function() {
  console.log("Server listening on: ", port);
});


