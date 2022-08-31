import jwt, { Secret } from "jsonwebtoken";
class HandleAuthorization {
  generateTokenJwt(id: string) {
    return jwt.sign({ id: id }, process.env.SECRET_JWT as Secret, { expiresIn: "2 days" })
  }

  verifyTokenJwt(token: string) {
    return jwt.verify(token, process.env.SECRET_JWT as Secret)
  }
}

export default new HandleAuthorization()