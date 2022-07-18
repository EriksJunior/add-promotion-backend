import { Knex } from "knex";
import { CompanyEntity } from "../entities/CompanyEntity";

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

  async save(data: CompanyEntity) {
    data.createdAt = new Date();
    await this.database.table(this.table).insert(data)
  }

  async update(data: CompanyEntity, id: string) {
    return await this.database.table(this.table)
      .update(data)
      .where('id', '=', id)
  }

  async delete(id: string) {
    return await this.database.table(this.table)
      .delete()
      .where('id', '=', id)
  }
}
