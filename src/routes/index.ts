import { Router } from "express";

import loginRouter from './login';
import companyRouter from './company'
import authRouter from './auth'

const router = Router();

router.use('/login', loginRouter)
router.use('/company', companyRouter)
router.use('/auth', authRouter)


export default router

