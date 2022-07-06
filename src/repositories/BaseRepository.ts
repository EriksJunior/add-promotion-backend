import { Knex } from "knex";

 export class BaseRepository<T> {
  private table: string
  private database: Knex

  constructor(table: string, database: Knex){
    this.table = table;
    this.database = database;
  }

  async findById(id: string, idEmpresa: string): Promise<T> {
    const data = await this.database.select('*')
    .table(this.table)
    .where('id', '=', id) 
    .andWhere('idEmpresa', '=', idEmpresa)
    .first()

    return data
  }

  async save(data: T) {
    const id = await this.database.table(this.table).insert(data)
    console.log(id)
    return id
  }

  async update(data: T, id: string, idEmpresa: string) {
    await this.database.table(this.table)
      .update(data)
      .where('id', '=', id)
      .andWhere('idEmpresa', '=', idEmpresa)
  }

  async delete(id: string, idEmpresa: string) {
    await this.database.table(this.table)
      .delete()
      .where('id', '=', id)
      .andWhere('idEmpresa', '=', idEmpresa)
  }
}
