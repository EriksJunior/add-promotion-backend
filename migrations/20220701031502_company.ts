import { Knex } from "knex";



export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('company', (table) => {
    table.string('id').notNullable().primary();
    table.string('companyName', 100).notNullable();
    table.string('address', 100).notNullable();
    table.string('district', 50).notNullable();
    table.integer('number').notNullable();
    table.string('city', 50).notNullable();
    table.string('uf', 2).notNullable();
    table.string('cep', 9).notNullable();
    table.string('cpfCnpj', 18).notNullable();
    table.string('email', 50).notNullable();
    table.string('password', 100).notNullable();
    table.integer('confirmed').notNullable().defaultTo(0);
    table.string('telephone', 20).defaultTo(null);
    table.string('secret', 100).notNullable();
    table.dateTime('createdAt').nullable();
    table.dateTime('updatedAt').nullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('company')
}

