const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
  }
});

export default knex