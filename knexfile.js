// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/speedtest'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }
};
