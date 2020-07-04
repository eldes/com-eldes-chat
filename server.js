'use strict';
var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Message = require('./api/models/msg-model'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/HelloMongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msg-routes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);