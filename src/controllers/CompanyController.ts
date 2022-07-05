import { Request, Response } from 'express'
import CompanyService  from '../services/CompanyService'

class CompanyController {

  async create(req: Request, res: Response) {
    try {
      const data = await CompanyService.save()
      res.send(data)
    } catch (error) {
      console.log(error)
    }
 
  }
}

export default new CompanyController()