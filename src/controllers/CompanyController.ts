import { Request, Response } from 'express'
import CompanyService from '../services/CompanyService'

class CompanyController {

  async create(req: Request, res: Response) {
    try {
      const body = req.body
      const data = await CompanyService.save(body)

      res.status(200).json({ data })
    } catch (error: any) {
      res.status(400).json({ erro: error.message })
    }
  }
  
}

export default new CompanyController()