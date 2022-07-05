import { Router } from "express";

import loginRouter from './login';
import companyRouter from './company'

const router = Router();

router.use('/login', loginRouter)
router.use('/company', companyRouter)

export default router

