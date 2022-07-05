import { Request, Response } from 'express'

class LoginController {
   async verify(req: Request, res: Response): Promise<any> {
    return res.send("usuario logado")
  }
}

export default new LoginController()