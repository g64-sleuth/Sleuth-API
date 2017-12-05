
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {
          ip: '128.177.113.102',
          dl_speed: '60',
          name: 'Zayo Bandwidth',
          lat: '39.7525',
          long: '-104.9995'
        },
        {
          ip: '',
          dl_speed: '65',
          name: 'Zayo Bandwidth',
          lat: '',
          long: ''
        },
        {
          ip: '',
          dl_speed: '35',
          name: 'Comcast',
          lat: '',
          long: ''
        },
        {
          ip: '',
          dl_speed: '2',
          name: 'Century Link',
          lat: '',
          long: ''
        },
      ]);
    });
};


//
// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.createTable('tests', (table) => {
//       table.increments().primary;
//       table.text('ip');
//       table.decimal('dl_speed', [10], [2]);
//       table.dateTime('timestamp');
//       table.text('name');
//       table.text('lat');
//       table.text('long');
//   }))
//   ])
// };
