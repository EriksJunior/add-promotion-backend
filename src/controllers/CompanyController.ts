import { Request, Response } from 'express'
import { CompanyService } from '../services/CompanyService'

export class CompanyController {
  #companyService: CompanyService

  constructor(companyService: CompanyService) {
    this.#companyService = companyService
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const dataUser = req.body
      const data = await this.#companyService.save(dataUser)

      return res.status(201).json({ id: data, message: 'Confirme seu e-mail!' })
    } catch (error: any) {
      console.log(error)
      return res.status(422).json(error.erros)
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const dataUser = req.body
      await this.#companyService.update(dataUser, id)

      return res.status(200).json({ message: 'dados atualizados!' })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      await this.#companyService.delete(id)

      return res.status(200).json({ message: 'Registro deletado' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  async confirmUser(req: Request, res: Response): Promise<Response> {
    try {
      const { companyId } = req.query
      await this.#companyService.confirmUser(companyId as string)

      return res.status(200).json({ message: 'E-mail confirmado com sucesso!' })
    } catch (error: any) {
      return res.status(error.statusCode).json({ error: error.message })
    }
  }

  async resendConfirmationEmail(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.query
      await this.#companyService.resendConfirmationEmail(email as string)

      return res.status(200).json({ message: 'E-mail de confirmação reenviado!' })
    } catch (error: any) {
      return res.status(error.statusCode).json({ error: error.message })
    }
  }

  async findCompanyPerPage(req: Request, res: Response) {
    try {
      const page = req.params.page

      const result = await this.#companyService.findCompanyPerPage(page)
      return res.status(200).json(result)
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

}