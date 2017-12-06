
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tests', (table) => {
      table.increments().primary;
      table.text('ip');
      table.string('dl_speed');
      table.dateTime('timestamp');
      table.text('name');
      table.text('lat');
      table.text('long');
  })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tests')
  ])
};
