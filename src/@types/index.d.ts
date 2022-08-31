import Edge from 'edge-js'

declare global {
  namespace Express {
    interface Request {
      id_company?: strng
      edge?: Edge
    }
  }
}