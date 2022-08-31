import { Request, Response, Router, NextFunction } from "express";

import { authController } from "../controllers";

const router = Router()

router.post('/', (req: Request, res: Response, next: NextFunction) =>{
  return authController.Company(req, res)
})

export default router