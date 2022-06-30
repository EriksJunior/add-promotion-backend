import { Request, Response } from 'express'

class LoginController {
  public async verify(req: Request, res: Response): Promise<any> {
    return res.send("usuario logado")
  }
}

export default new LoginController()