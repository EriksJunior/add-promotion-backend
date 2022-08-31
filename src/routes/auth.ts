import { Request, Response, Router } from "express";

import { authController } from "../controllers";

const router = Router()

router.post('/', (req: Request, res: Response) =>{
  return authController.Company(req, res)
})

export default router