import { Router } from "express";

import CompanyController from "../controllers/CompanyController";

const router = Router();

router.get('/createuser', CompanyController.create)

export default router