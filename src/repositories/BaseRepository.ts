import { Knex } from "knex";
export class BaseRepository<T> {
  #table: string
  #database: Knex

  constructor(table: string, database: Knex) {
    this.#table = table;
    this.#database = database;
  }

  async findById(id: string): Promise<T> {
    const data = await this.#database.select('*')
      .table(this.#table)
      .where('id', '=', id)
      .first()

    return data
  }

  async save(data: any) {
    data.createdAt = new Date();

    return await this.#database.table(this.#table).insert(data)
  }

  async findCompanyPerPage(page: number | string) {
    return await this.#database.select('*').table(this.#table)
      .limit(10)
      .offset((parseInt(`${page}`) - 1) * 10)
  }

  async update(data: any, id: string) {
    return await this.#database.table(this.#table)
      .update(data)
      .where('id', '=', id)
  }

  async delete(id: string) {
    return await this.#database.table(this.#table)
      .delete()
      .where('id', '=', id)
  }
}
