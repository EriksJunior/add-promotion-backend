import JoiErrorHandling from "../utils/errors/JoiErrorHandlingJoi";

import { CompanyRepo } from "../repositories/CompanyRepo";

import { CompanyEntity } from "../entities/CompanyEntity";
import { IMailProvider } from "../interfaces/IMailProvider";

import companyValidate from "../validators/CompanyValidate";
import DataToConfirmRegistration from "../utils/DataToConfirmRegistration";
export class CompanyService {
  #mailProvider: IMailProvider
  #companyRepo: CompanyRepo

  constructor(mailProvider: IMailProvider, companyRepo: CompanyRepo) {
    this.#mailProvider = mailProvider
    this.#companyRepo = companyRepo
  }

  async save(body: CompanyEntity) {
    const userAlreadyExists = await this.#companyRepo.findByEmail(body.email)

    if (userAlreadyExists) {
      throw new Error('Usuário já existe.')
    }

    const companyTy = new CompanyEntity(body)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error) {
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)
    }

    await this.#companyRepo.save(companyTy)

    const dataEmail = DataToConfirmRegistration.getInformationFromEmail(companyTy.email)
    await this.#mailProvider.sendMail(dataEmail)

    return companyTy.id
  }

  async search(id: string) {
    const result = await this.#companyRepo.findById(id)

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

    const result = await this.#companyRepo.update(companyTy, id)

    if (!result)
      throw new Error('Não foi possível atualizar informações do cliente')

    return
  }

  async delete(id: string) {
    const result = await this.#companyRepo.delete(id)

    if (!result)
      throw new Error('Não foi possivel deletar a empresa')

    return
  }
}

