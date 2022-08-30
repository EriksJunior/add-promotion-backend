import jwt, { Secret } from "jsonwebtoken";

class HandleAuthorization {
  async generateTokenJwt(uuid: string) {
    return await jwt.sign(uuid, process.env.SECRET as Secret)
  }

  async auth() {
    console.log('testeeeeeeee')
  }
}

export default new HandleAuthorization()