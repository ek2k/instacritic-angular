var express = require('express');
var router = express();
var knex = reqire('../db/knex')


function users() {
  return knex('users');
}

router.get('/', function(req, res) {
  res.send('this works')
})

module.exports = router;
