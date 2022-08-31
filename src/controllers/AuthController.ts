import { Request, Response } from 'express'

import { CompanyService } from '../services/CompanyService'

import HandlePassword from '../utils/HandlePassword'
import HandleAuthorization from '../utils/HandleAuthorization'

export class Auth {
  #companyService: CompanyService

  constructor(companyService: CompanyService) {
    this.#companyService = companyService
  }

  async Company(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const company = await this.#companyService.findByEmail(email)

      if (!company)
        return res.status(404).json({ message: 'Email ou Senha incorretos' })

      const passwordIsValid = HandlePassword.compare(password, company.password)

      if (!passwordIsValid)
        return res.status(401).json({ message: 'Email ou Senha incorretos' })

      const token = HandleAuthorization.generateTokenJwt(company.id)
      return res.json({ token })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

}