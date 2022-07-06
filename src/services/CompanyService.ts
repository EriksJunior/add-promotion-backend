import CompanyRepo from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import { GenericError } from "../errors/GenericError";
import companyValidate from "../validators/CompanyValidate";

class CompanyService {
  async save(body: CompanyEntity) {
    const companyTy = new CompanyEntity(body)

    const validationResult = companyValidate.validate(companyTy)
    
    if (validationResult.error){
      
      throw new Error(`${validationResult.error}`);
    } 


    const id = await CompanyRepo.save(companyTy)
    return id
  }
}

export default new CompanyService()
