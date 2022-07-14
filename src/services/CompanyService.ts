import CompanyRepo from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import companyValidate from "../validators/CompanyValidate";
import ErrorHandling from "../utils/ErrorHandling";
import { randomUUID } from 'crypto'

class CompanyService {
  async save(body: CompanyEntity) {
    const id = randomUUID();
    const companyTy = new CompanyEntity(body, id, true)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw ErrorHandling.ErrorHandling(validationResult.error.details)


    await CompanyRepo.save(companyTy)
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
    const companyTy = new CompanyEntity(body, id, false)

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
      throw new Error('Não foi possivel deletar a company')

    return
  }
}

export default new CompanyService()
