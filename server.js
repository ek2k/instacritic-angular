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


app.post('/users/new', (req, res) => {
  console.log(req.body);

app.post('/users', (req, res) => {
  users().insert({
  username: req.body.username,
  password: req.body.password,
  email: req.body.email,
  avatar: req.body.avatar,
  city: req.body.city,
  state: req.body.state
  }).then(function(result){
    console.log('done');
  })
})


app.get('/episodes', (req, res) => {
  episodes().then((result) => {
    res.json(result);
  })
})

app.post('/episodes', (req, res) => {
  episodes().insert({
    show_id: req.body.show_id,
    episode_number: req.body.episode_number,
    episode_name: req.body.episode_name,
    season_number: req.body.season_number
  })
})

//authentication

app.post('/signup', (req, res) => {
  var hash = bcrypt.hashSync(req.body.password, 8);
  users().insert({email: req.body.email, password: hash}).then(function() {
    res.redirect('/signin')
  })
})

//authorization

app.post('/signin', (req, res) => {
  users().findOne({email: req.body.email}).then(function(user) {
    if (user) {
      var hash = bcrypt.hashSync(req.body.password, 8);
      if (bcrypt.compareSync(hash, user.password)) {
        req.session.user = user;
        res.redirect('/');
      }
      else {
        res.render('signin', "Error: email/password did not match ")
      }
      res.redirect('/signin')
    }
  })
})

app.listen(3000, function(req, res){
  console.log('Listening on port 3000');
})
