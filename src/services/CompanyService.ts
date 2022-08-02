import JoiErrorHandling from "../utils/errors/JoiErrorHandlingJoi";

import CompanyRepo from "../repositories/CompanyRepo";

import { CompanyEntity } from "../entities/CompanyEntity";
import { IMailProvider, IMessage } from "../providers/IMailProvider";

import companyValidate from "../validators/CompanyValidate";
import DataToConfirmRegistration from "../utils/DataToConfirmRegistration";
export class CompanyService {
  #mailProvider: IMailProvider

  constructor(mailProvider: IMailProvider) {
    this.#mailProvider = mailProvider
  }

  async save(body: CompanyEntity) {
    const companyTy = new CompanyEntity(body)
    
    const validationResult = companyValidate.validate(companyTy)
    if (validationResult.error)
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)

    await CompanyRepo.save(companyTy)

    const dataEmail = DataToConfirmRegistration.data(companyTy.email)
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

