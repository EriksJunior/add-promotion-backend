import { Request, Response, Router, NextFunction } from "express";

import { companyController } from "../controllers";
import HandleAuthorization from '../auth/HandleAuthorization'

const router = Router();

router.post('/createcompany', (request: Request, response: Response, next: NextFunction) => {
  HandleAuthorization.auth();
  // return companyController.create(request, response)
})

router.get('/searchcompany/:id', (request, response) => {
  return companyController.search(request, response)
})

router.put('/updatecompany/:id', (request, response) => {
  return companyController.update(request, response)
})

router.get('/confirmed/email', (request, response) => {
  return companyController.confirmUser(request, response)
})

router.get('/resend/confirmation/email', (request, response) => {
  return companyController.resendConfirmationEmail(request, response)
})

router.delete('/deletecompany/:id', (request, response) => {
  return companyController.delete(request, response)
})

export default router