const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const thing = require('knex')(config);

module.exports = thing;
