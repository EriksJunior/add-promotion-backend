import { Router } from "express";

import CompanyController from "../controllers/CompanyController";

const router = Router();

router.post('/createcompany', CompanyController.create)
router.get('/searchcompany/:id', CompanyController.search)
router.put('/updatecompany/:id', CompanyController.update)
router.delete('/deletecompany/:id', CompanyController.delete)

export default router