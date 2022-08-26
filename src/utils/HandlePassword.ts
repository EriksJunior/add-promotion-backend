import bcrypt from 'bcrypt'

class HandlePassword{
  async encrypt(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }
}

export default new HandlePassword()