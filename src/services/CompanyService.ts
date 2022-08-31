import JoiErrorHandling from "../utils/exceptions/JoiErrorHandlingJoi";
import { IMailProvider } from "../interfaces/IMailProvider";

import { CompanyRepo } from "../repositories/CompanyRepo";
import { CompanyEntity } from "../entities/CompanyEntity";
import { GenericException } from "../utils/exceptions/GenericException";

import companyValidate from "../validators/CompanyValidate";
import DataToConfirmRegistration from "../utils/DataToConfirmRegistration";
import HandlePassword from "../utils/HandlePassword";
export class CompanyService {
  #mailProvider: IMailProvider
  #companyRepo: CompanyRepo

  constructor(mailProvider: IMailProvider, companyRepo: CompanyRepo) {
    this.#mailProvider = mailProvider
    this.#companyRepo = companyRepo
  }

  async save(body: CompanyEntity) {
    const userAlreadyExists = await this.#companyRepo.findByEmail(body.email)

    if (userAlreadyExists)
      throw new GenericException('Este email já esta em uso!.', {})

    const companyTy = new CompanyEntity(body)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)

    companyTy.password = await HandlePassword.encrypt(companyTy.password)

    await this.#companyRepo.save(companyTy)

    const dataEmail = DataToConfirmRegistration.getInformationFromEmail(companyTy.email, companyTy.id)
    await this.#mailProvider.sendMail(dataEmail)

    return companyTy.id
  }

  async update(body: CompanyEntity, id: string) {
    const companyTy = new CompanyEntity(body, id)

    const validationResult = companyValidate.validate(companyTy)

    if (validationResult.error)
      throw JoiErrorHandling.JoiErrorHandling(validationResult.error.details)

    const result = await this.#companyRepo.update(companyTy, id)

    if (!result)
      throw new GenericException('Não foi possível atualizar informações do cliente', {})

    return
  }

  async delete(id: string) {
    const result = await this.#companyRepo.delete(id)

    if (!result)
      throw new GenericException('Não foi possivel deletar a empresa', {})

    return
  }

  async confirmUser(id: string) {
    const userConfirm = await this.#companyRepo.findById(id)
    if (userConfirm?.confirmed) {
      throw new GenericException('E-mail já confirmado!', {}, 403)
    } else if (userConfirm === undefined) {
      throw new GenericException('E-mail inexistente na nossa base e dados!', {}, 404)
    }

    return await this.#companyRepo.confirmUser(id, { confirmed: true })
  }

  async resendConfirmationEmail(email: string) {
    const userExists = await this.#companyRepo.findByEmail(email)

    if (!userExists.confirmed) {
      const dataEmail = DataToConfirmRegistration.getInformationFromEmail(userExists.email, userExists.id)

      await this.#mailProvider.sendMail(dataEmail)
    } else {
      throw new GenericException('E-mail já confirmado na nossa base e dados!', {}, 403)
    }

    return userExists
  }

  async findByEmail(email: string) {
    return await this.#companyRepo.findByEmail(email)
  }

}

