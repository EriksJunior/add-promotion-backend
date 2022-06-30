import { Router } from "express";

import LoginController from "../controllers/LoginController";

const router = Router();

router.get('/', LoginController.verify)

export default router

