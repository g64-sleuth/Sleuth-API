var express = require('express');
var router = express.Router();
const knex = require('../db/knex');


router.get('/:ip', (req, res) => {
	let ip = req.params.ip
	console.log(ip)
  knex('tests')
  .select()
	.where('ip', ip)
  .then(tests => {
    res.json(tests);
  })
	.catch(err=>{
		res.status(400).send(err)
	})
});

router.get('/:name', (req, res) => {
  const name = req.params.name;
  knex('tests')
  .select()
  .where('name', name)
  .then(data => {
		let reducer = (total, number)=>total + number
    let newData = (data.reduce(reducer)/data.length)
    console.log(newData);
    return newData
		.then((newData) =>{
    res.status(200).json(newData);
		})
    .catch(err=>{
      res.status(400).send(err)
    })
  })
});

router.post('/', (req, res) => {
  req.body.dateTime = new Date()
  knex('tests')
	.insert(req.body)
  .returning('*')
  .then((tests) => {
    res.status(200).json(tests);
  })
  .catch(err=>{
    res.status(400).send(err)
  })
});

module.exports = router;
