import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product', (table) =>{
    table.string('id').notNullable().primary()
    table.string('idCompany').notNullable()
    table.string('idMeasurements').defaultTo(null)
    table.string('idCategory')
    table.decimal('value').defaultTo(0.00)
    table.float('inventory').defaultTo(0.00)
    table.float('inventoryBySize')
    table.string('description').defaultTo(null)
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('product')
}

