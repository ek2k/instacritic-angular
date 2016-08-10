var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var knex = require('./db/knex.js');
var pg = require('pg');
// var users = require('./routes/shows')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/view/index.html');
})


function shows() {
  return knex('shows');
}

function users() {
  return knex('users');
}
function episodes() {
  return knex('episodes');
}

app.get('/shows', (req, res) => {
  shows().then((result) => {
    res.json(result);
  })
})

app.get('/users', (req, res) => {
  users().then((result) => {
    res.json(result);
  })
})

app.get('/episodes', (req, res) => {
  episodes().then((result) => {
    res.json(result);
  })
})


app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
})
