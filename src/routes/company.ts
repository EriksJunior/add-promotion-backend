import { Router } from "express";

import CompanyController from "../controllers/CompanyController";

const router = Router();

router.post('/createuser', CompanyController.create)

export default router