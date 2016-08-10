var express = require('express');
var router = express();
var knex = require('../db/knex')


function users() {
  return knex('shows');
}

router.get('/', function(req, res) {
  res.send('this works')
})

module.exports = router;
