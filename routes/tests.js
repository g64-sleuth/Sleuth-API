var express = require('express');
var router = express.Router();
const knex = require('../db/knex');


router.get('/:ip', (req, res) => {
	ip = req.params.ip
  knex('tests')
  .select
	.where('ip', ip)
  .then(tests => {
    res.sendStatus(200).json(tests);
  })
});

router.get('/:name', (req, res) => {
  const name = req.params.name;
  knex('tests')
  .select()
  .where('name', name)
  .then(data => {
		let reducer = (total, number)=>total + number
	  return (data.reduce(reducer)/data.length)
		.then(() =>{
    res.sendStatus(200).json(tests);
		})
  })
});

router.post('/', (req, res) => {
  knex('tests').insert(req.body)
  .then( => {
    res.sendStatus(200).json(tests);
  })
});

module.exports = router;
