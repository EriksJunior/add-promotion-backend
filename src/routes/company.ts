import { request, response, Router } from "express";

import { companyController } from "../controllers";

const router = Router();

router.post('/createcompany', (request, response) => {
  return companyController.create(request, response)
})

router.get('/searchcompany/:id', (request, response) => {
  return companyController.search(request, response)
})

router.put('/updatecompany/:id', (request, response) => {
  return companyController.update(request, response)
})

router.delete('/deletecompany/:id', (request, response) => {
  return companyController.delete(request, response)
})

export default router