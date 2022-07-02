import { Request, Response } from 'express'
import  CompanyService  from '../services/CompanyService'

  class CompanyController {
  // #companyService: CompanyService //o cerquilha serve para deixar o metodo CompanyService PRIVADO

   async verify(req: Request, res: Response) {
    const data = await CompanyService.save()
    res.send(data)
  }
}

export default new CompanyController()