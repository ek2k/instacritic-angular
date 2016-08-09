var express = require('express');
var app = express();
var bodyParser = require('bodyParser');
var methodOverride = require('method-override');
var knex = require('./db/knex.js');
var pg = require('pg');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
