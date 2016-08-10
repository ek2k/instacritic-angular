var express = require('express');
var router = express();
var knex = require('../db/knex');

function shows() {
  return knex('shows');
}

router.get('/', (req, res) => {
  shows().then((result) => {
    res.json(result);
  })
})

module.exports = router;
