var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

function getDlAverage(req,res,callback){
  return
}

router.get('/', function(req, res, next) {
  knex('tests')
  .select
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
  // const tests = {
  //   ip = req.body.ip,
  //   dl_speed = req.body.dl_speed,
  //   up_speed = req.body.up_speed,
  //   timestamp = req.body.timestamp,
  //   name = req.body.name,
  //   lat = req.body.lat,
  //   long = req.body.long
  // }
  knex('tests').insert(req.body)
  .then(() => {
    res.sendStatus(200).json(tests);
  })
});
//
// router.put('/:id', (req, res) => {
//   knex('tests')
//   .where('id', req.params.id)
//   .update(tests, 'id')
//   .then(() =>
//   res.sendStatus(200).json(tests);
//   })
// });

module.exports = router;
