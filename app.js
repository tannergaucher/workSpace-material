const express = require('express');
// const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const promisify = require('es6-promisify');
// const util = require('util');
const routes = require('./routes/index');
const path = require('path');

const app = express();

//view engines?

//serves static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//take raw requests, turn into usable req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//sessions store data on visitors from req to req 

//passport js for logins

// use promisify for callback based apis

//handle our routes
app.use('/', routes);

module.exports = app;