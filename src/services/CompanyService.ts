import CompanyRepo from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import companyValidate from "../validators/CompanyValidate";
import ErrorHandling from "../utils/ErrorHandling";
import RegistrationConfirmation from "../utils/RegistrationConfirmation";

class CompanyService {
  async save(body: CompanyEntity) {
    const companyTy = new CompanyEntity(body)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw ErrorHandling.ErrorHandling(validationResult.error.details)

    await CompanyRepo.save(companyTy)

    const result = await RegistrationConfirmation.Confirm(companyTy.email)
    console.log(result)

    return companyTy.id
  }

  async search(id: string) {
    const result = await CompanyRepo.findById(id)

    if (!result) {
      throw new Error('Erro ao buscar informações do cliente')
    }

    return result
  }

  async update(body: CompanyEntity, id: string) {
    const companyTy = new CompanyEntity(body, id)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw ErrorHandling.ErrorHandling(validationResult.error.details)

    const result = await CompanyRepo.update(companyTy, id)

    if (!result)
      throw new Error('Não foi possível atualizar informações do cliente')

    return 
  }

  async delete(id: string) {
    const result = await CompanyRepo.delete(id)

    if (!result)
      throw new Error('Não foi possivel deletar a empresa')

    return
  }
}

export default new CompanyService()
