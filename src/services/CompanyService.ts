import CompanyRepo from "../repositories/CompanyRepo";
import { BaseRepository } from "../repositories/BaseRepository";
import { CompanyEntity } from "../entities/CompanyEntity";
import { GenericError } from "../errors/GenericError";
import companySchema from "../validators/CompanyValidate";

class CompanyService {
  async save(body: CompanyEntity):Promise<any> {
    const companyTy = new CompanyEntity(body)

    const resultValidate = companySchema.validate(companyTy)
    if(resultValidate.error){
      console.log(resultValidate.error.details[0].message)
    }
 
    const id = await CompanyRepo.save(companyTy)
    return id
  }
}

export default new CompanyService()
