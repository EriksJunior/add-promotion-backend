import bcrypt from 'bcrypt'

class HandlePassword {
  async encrypt(password: string) {
    return await bcrypt.hash(password, 10)
  }

  compare(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
  }
}

export default new HandlePassword()