import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('categories', (table) =>{
    table.increments('id').unsigned().primary()
    table.string('description')
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('categories')
}

