import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('teste')
}

