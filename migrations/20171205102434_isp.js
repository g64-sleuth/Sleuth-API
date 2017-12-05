
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('isp', (table) => {
      table.increments().primary;
      table.text('name');
      table.decimal('dl_avg');
      table.decimal('up_avg');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('isp')
  ])
};
