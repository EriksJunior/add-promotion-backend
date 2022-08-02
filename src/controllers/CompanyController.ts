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

      return res.status(201).json(data)
    } catch (error: any) {
      return res.status(400).json({ error: error })
    }
  }

  async search(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id
      const data = await this.#companyService.search(id)

      return res.status(200).json(data)
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
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

}