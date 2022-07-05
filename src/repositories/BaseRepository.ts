import { Knex } from "knex";

export class BaseRepository<T> {
  private table: string
  private database: Knex

  constructor(table: string, database: Knex) {
    this.table = table;
    this.database = database;
  }

  async findById() {

  }

  async save(data: T) {
    await this.database.table(this.table).insert(data)
  }

  async update(data: T, id: string, idEmpresa: string) {
    await this.database
      .update(this.table)
      .where('id', '=', id)
      .andWhere('idEmpresa', '=', idEmpresa)
  }

  async delete() {

  }
}