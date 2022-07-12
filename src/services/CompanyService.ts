import CompanyRepo from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import companyValidate from "../validators/CompanyValidate";
import ErrorHandling from "../utils/ErrorHandling";

class CompanyService {
  async save(body: CompanyEntity) {
    const companyTy = new CompanyEntity(body)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw ErrorHandling.ErrorHandling(validationResult.error.details)


    await CompanyRepo.save(companyTy)
    return companyTy.id
  }

  async search(id: string) {
     const result = await CompanyRepo.findById(id)
     
    if(!result){
      throw new Error('Erro ao buscar informações do cliente')
    }

    return result
  }

  async update(body: CompanyEntity, id: string){
    const companyTy = new CompanyEntity(body, id)
    
    const validationResult = companyValidate.validate(companyTy)

    if(validationResult.error)
      throw ErrorHandling.ErrorHandling(validationResult.error.details)

      await CompanyRepo.update(companyTy, id)

      return companyTy.id
  }
}

export default new CompanyService()
