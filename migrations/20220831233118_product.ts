import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product', (table) =>{
    table.string('id').notNullable().primary()
    table.integer('idCompany').notNullable()
    table.integer('idMeasurements').defaultTo(null)
    table.string('idCategory').defaultTo(null)
    table.decimal('price', 6, 2).defaultTo(0.00)
    table.float('inventory').defaultTo(0.00)
    table.integer('inventoryBySize')
    table.string('description').defaultTo(null)
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('product')
}

