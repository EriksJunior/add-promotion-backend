import Edge from 'edge-js'

declare global {
  namespace Express {
    interface Request {
      idCompany?: strng
      edge?: Edge
    }
  }
}