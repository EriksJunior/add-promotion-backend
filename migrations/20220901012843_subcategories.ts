import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('subcategories', (table) =>{
    table.integer('id').primary()
    table.integer('idCategory').references('id').inTable('categories')
    table.string('description')
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('subcategories')
}

