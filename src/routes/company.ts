import { Request, Response, Router, NextFunction } from "express";

import { companyController } from "../controllers";

const router = Router();

router.post('/createcompany', (req: Request, res: Response, next: NextFunction) => {
  return companyController.create(req, res)
})

router.get('/searchcompany/:id', (req, res) => {
  return companyController.search(req, res)
})

router.put('/updatecompany/:id', (req, res) => {
  return companyController.update(req, res)
})

router.get('/confirmed/email', (req, res) => {
  return companyController.confirmUser(req, res)
})

router.get('/resend/confirmation/email', (req, res) => {
  return companyController.resendConfirmationEmail(req, res)
})

router.delete('/deletecompany/:id', (request, response) => {
  return companyController.delete(request, response)
})

export default router