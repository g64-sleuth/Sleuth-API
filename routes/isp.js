var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('isp')
  .select
  .then(isp => {
    res.sendStatus(200).json(isp);
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  knex('isp')
  .select()
  .where('id', id)
  .first()
  .then(isp => {
    res.sendStatus(200).json(isp);
  })
});

router.post('/', (req, res) => {
  const isp = {
    name = req.body.name,
    dl_avg = req.body.dl_avg,
    up_avg = req.body.up_avg
  }
  knex('isp').insert(isp, 'id')
  .then(ids => {
    const id = ids[0];
    console.log(id)
    res.sendStatus(200).json(isp);
  })
});

router.put('/:id', (req, res) => {
  knex('isp')
  .where('id', req.params.id)
  .update(isp, 'id')
  .then(() =>
  res.sendStatus(200).json(isp);
  })
});

module.exports = router;
