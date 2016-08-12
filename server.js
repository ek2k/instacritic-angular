var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var knex = require('./db/knex.js');
var pg = require('pg');
var bcrypt = require('bcrypt')
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

function user_shows() {
  return knex('user_shows');
}

function user_reviews() {
  return knex('user_reviews');
}
function review_comments() {
  return knex('review_comments');
}

app.get('/shows', (req, res) => {
  shows().then((result) => {
    res.json(result);
  })
})

app.post('/shows', (req, res) => {
  shows().insert({
    name: req.body.name,
    network: req.body.network,
    genre: req.body.genre
  })
})

app.get('/users', (req, res) => {
  users().then((result) => {
    res.json(result);
  })
})

app.get('/reviews', (req, res) => {
  knex.from('users').innerJoin('user_reviews', 'users.id', 'user_reviews.user_id').then((result) => {
    res.json(result);
  })
})


app.post('/users/new', (req, res) => {
  var hash = bcrypt.hashSync(req.body.password, 8);
  users().insert({
  username: req.body.username,
  password: hash,
  email: req.body.email,
}).then(function(result){
  res.json(result);
  })
})

//authorization

app.post('/signin', (req, res) => {
  users().where({email: req.body.email}).first().then(function(data) {
    console.log(data.password);
    if (data) {
      if (bcrypt.compare(req.body.password, data.password)) {
        req.session.data = data;
        res.redirect('/');
      }
      else {
        res.render('signin', "Error: email/password did not match ")
      }
      res.redirect('/signin')
    }
  })
})

app.listen(process.env.NODE_ENV || 3000, function(req, res){
  console.log('Listening on port 3000');
})
