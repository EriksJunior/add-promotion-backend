import { Request, Response } from 'express'
import CompanyService from '../services/CompanyService'

class CompanyController {

  async create(req: Request, res: Response) {
    try {
      const body = req.body
      const data = await CompanyService.save(body)
      
      res.status(201).json(data)
    } catch (error: any) {
      res.status(400).json({ error: error })
    }
  }

  async search(req: Request, res: Response){
    try {
      const id = req.params.id
      const data = await CompanyService.search(id)

      return res.status(200).json(data)
    } catch (error: any) {
      res.status(400).json({error: error.message})
    }
  }

  async update(req: Request, res: Response){

  }

  async delete(req: Request, res: Response){

  }
  
}

export default new CompanyController()