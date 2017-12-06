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

router.get('/isp/:name', (req, res) => {
  const name = req.params.name;
  console.log(name);
  knex('tests')
  .select()
  .where('name', name)
  .then(data => {
    let newData = {
      'name': data[0].name,
      'dl_avg': 0,
    }
    getSpeedMedian(data)
    .then((medianSpeed) =>{
    newData.dl_avg = medianSpeed
    res.status(200).json(newData);
		})
    .catch(err=>{
      res.status(400).send(err)
    })
  })
});

router.post('/', (req, res) => {
  req.body.timestamp = new Date()
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


function getSpeedMedian(objectArray){
  let data = []
  objectArray.forEach(function(object) {
      data.push(Number(object.dl_speed))
  });

  let sorted = new Promise(function(resolve,reject){
    let reducer = (total, number)=>total + number
    let newData = (data.reduce(reducer)/data.length)
    resolve(newData)
  })
return sorted
}
module.exports = router;
