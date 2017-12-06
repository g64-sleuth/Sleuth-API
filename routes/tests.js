var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

function getDlAverage(req,res,callback){
  return
}

router.get('/:ip', function(req, res, next) {
  knex('tests')
  .select
	.where('ip', ip)
  .then(tests => {
    res.sendStatus(200).json(tests);
  })
});

router.get('/:name', (req, res) => {
  const name = req.params.id;
  knex('tests')
  .select()
  .where('name', name)
  .then(name => {
    getDlAverage(req, res, (data))
    res.sendStatus(200).json(tests);
  })
});

router.post('/', (req, res) => {
  knex('tests').insert(req.body)
  .then(() => {
    res.sendStatus(200).json(tests);
  })
});

module.exports = router;
