import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('promotion', (table) =>{
    table.string('id').notNullable().primary()
    table.string('idCompany').notNullable()
    table.string('photo').defaultTo(null)
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('promotion')
}

