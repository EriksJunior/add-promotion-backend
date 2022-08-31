import jwt, { Secret } from "jsonwebtoken";

class HandleAuthorization {
  generateTokenJwt(id: string) {
    return jwt.sign({ id: id }, process.env.SECRET as Secret, { expiresIn: "2 days" })
  }
}

export default new HandleAuthorization()