import CompanyRepo from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import { GenericError } from "../errors/GenericError";
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
}

export default new CompanyService()
