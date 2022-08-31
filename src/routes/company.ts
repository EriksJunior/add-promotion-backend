import { Request, Response, Router, NextFunction } from "express";

import { companyController } from "../controllers";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/createcompany',  AuthMiddleware.auth, (req: Request, res: Response, next: NextFunction) => {
  return companyController.create(req, res)
})

router.get('/searchcompany/:id', AuthMiddleware.auth, (req, res) => {
  return companyController.search(req, res)
})

router.put('/updatecompany/:id', AuthMiddleware.auth, (req, res) => {
  return companyController.update(req, res)
})

router.get('/confirmed/email', AuthMiddleware.auth, (req, res) => {
  return companyController.confirmUser(req, res)
})

router.get('/resend/confirmation/email', AuthMiddleware.auth, (req, res) => {
  return companyController.resendConfirmationEmail(req, res)
})

router.delete('/deletecompany/:id', AuthMiddleware.auth, (request, response) => {
  return companyController.delete(request, response)
})

export default router