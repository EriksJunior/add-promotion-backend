import { Request, Response, NextFunction } from 'express'

import HandleAuthorization from '../utils/HandleAuthorization'


interface ITokenPayload {
  id: string
  iat: number
  exp: number
}

class AuthMiddleware {
  auth(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers

      if (!authorization)
        return res.status(401).json({ message: 'not authorized' })

      const token = authorization.replace('Bearer', '').trim()

      const data = HandleAuthorization.verifyTokenJwt(token)
      const { id } = data as ITokenPayload

      req.id_company = id
      next()

    } catch (error: any) {
      return res.status(401).json(error.message)
    }
  }
}

export default new AuthMiddleware()