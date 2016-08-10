var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var knex = require('./db/knex.js');
var pg = require('pg');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/view/index.html');
})



app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
})
