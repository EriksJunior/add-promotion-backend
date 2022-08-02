import { CompanyEntity } from "../entities/CompanyEntity"
import { BaseRepository } from "./BaseRepository"

import database from '../config/database'


 class CompanyRepo extends BaseRepository<CompanyEntity> {
  constructor() {
    super('company', database)
  }
}

export default new CompanyRepo()