import JoiErrorHandling from "../utils/errors/JoiErrorHandlingJoi";

import CompanyRepo from "../repositories/CompanyRepo";

import { CompanyEntity } from "../entities/CompanyEntity";
import { IMailProvider } from "../interfaces/IMailProvider";
import { IBaseRepository } from "../interfaces/IBaseRepository";

import companyValidate from "../validators/CompanyValidate";
import DataToConfirmRegistration from "../utils/DataToConfirmRegistration";
export class CompanyService {
  #mailProvider: IMailProvider
  #baseRepository: IBaseRepository

  constructor(mailProvider: IMailProvider, baseRepository: IBaseRepository) {
    this.#mailProvider = mailProvider
    this.#baseRepository = baseRepository
  }

  async save(body: CompanyEntity) {
    const companyTy = new CompanyEntity(body)
    
    const validationResult = companyValidate.validate(companyTy)
    if (validationResult.error)
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)

    // await this.#baseRepository.save(companyTy)
    await CompanyRepo.save(companyTy)

    const dataEmail = DataToConfirmRegistration.getInformationFromEmail(companyTy.email)
    await this.#mailProvider.sendMail(dataEmail)

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
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)

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

