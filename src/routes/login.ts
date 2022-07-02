import { Router } from "express";

import CompanyController  from "../controllers/CompanyController";

const router = Router();
router.get('/verifyuser', CompanyController.verify)

export default router

