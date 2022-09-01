import { Request, Response } from "express";

export class PromotionsController {
  async register(req: Request, res: Response) {
    try {
      const dataPromotion = req.body
      const idCompany = req.idCompany


    } catch (error) {
      console.log(error)
    }
  }
}