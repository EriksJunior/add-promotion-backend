import { Knex } from "knex";

export interface IBaseRepository {
  findById(id: string): Promise<string>

  save(data: any): Promise<string>

  update(data: any): Promise<string>

  delete(data: any): Promise<string>
}