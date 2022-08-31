import { Knex } from "knex"
import { CompanyEntity } from "../entities/CompanyEntity"
import { BaseRepository } from "./BaseRepository"

export class CompanyRepo extends BaseRepository<CompanyEntity> {
  #database: Knex
  #table: string

  constructor(database: Knex) {
    super('company', database)
    this.#table = 'company'
    this.#database = database
  }

  async findByEmail(email: string): Promise<CompanyEntity> {
    const result = await this.#database.select('*')
      .table(this.#table)
      .where('email', '=', email)
      .first()

    return result
  }

  async confirmUser(id: string, confirmed: object): Promise<any> {
    return await this.#database.table(this.#table)
      .update(confirmed)
      .where('id', '=', id)
  }
}
