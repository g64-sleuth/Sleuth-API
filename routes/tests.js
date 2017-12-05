var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('tests')
  .select
  .then(tests => {
    res.sendStatus(200).json(tests);
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  knex('tests')
  .select()
  .where('id', id)
  .first()
  .then(tests => {
    res.sendStatus(200).json(tests);
  })
});

router.post('/', (req, res) => {
  const tests = {
    ip = req.body.id,
    dl_speed = req.body.dl_speed,
    up_speed = req.body.up_speed,
    timestamp = req.body.timestamp,
    isp_id = req.body.isp_id,
    lat = req.body.lat,
    long = req.body.long
  }
  knex('tests').insert(tests, 'id')
  .then(ids => {
    const id = ids[0];
    console.log(id)
    res.sendStatus(200).json(tests);
  })
});

router.put('/:id', (req, res) => {
  knex('tests')
  .where('id', req.params.id)
  .update(tests, 'id')
  .then(() =>
  res.sendStatus(200).json(tests);
  })
});

module.exports = router;
