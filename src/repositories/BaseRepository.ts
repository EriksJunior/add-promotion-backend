import { Knex } from "knex";

export class BaseRepository<T> {
  private table: string
  private database: Knex

  constructor(table: string, database: Knex) {
    this.table = table;
    this.database = database;
  }

  async findById(id: string): Promise<T> {
    const data = await this.database.select('*')
      .table(this.table)
      .where('id', '=', id)
      .first()

    return data
  }

  async save(data: T) {
    await this.database.table(this.table).insert(data)
  }

  async update(data: any, id: string) {
    await this.database.table(this.table)
      .update(data)
      .where('id', '=', id)
  }

  async delete(id: string) {
    await this.database.table(this.table)
      .delete()
      .where('id', '=', id)
  }
}
