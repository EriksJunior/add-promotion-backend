import { randomUUID } from 'crypto'

class LoginEntity {
  uuid: string
  address: string
  district: string
  number: number
  city: string
  cep: string
  cpfCnpj: string
  email: string
  password: string
  secret: string

  constructor(body: Omit<LoginEntity, 'uuid'>, uuid = randomUUID()) {
    this.uuid = uuid
    this.address = body.address
    this.district = body.district
    this.number = body.number
    this.city = body.city
    this.cep = body.cep
    this.cpfCnpj = body.cpfCnpj
    this.email = body.email
    this.password = body.password
    this.secret = body.secret
  }

}

export { LoginEntity };