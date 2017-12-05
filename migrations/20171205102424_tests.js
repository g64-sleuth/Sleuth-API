
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tests', (table) => {
      table.increments().primary;
      table.text('ip');
      table.decimal('dl_speed', [10], [2]);
      table.dateTime('timestamp');
      table.integer('isp_id');
      table.text('lat');
      table.text('long');
  }))
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tests')
  ])
};
