import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.DATABASE_NAME || 'promotion',
      user: process.env.USER || 'root',
      password: process.env.PASSWORD || '123456'
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: process.env.DATABASE_NAME || 'promotion',
      user: process.env.USER || 'root',
      password: process.env.PASSWORD || '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
