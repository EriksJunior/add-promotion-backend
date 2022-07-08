import { randomUUID } from 'crypto'

class CompanyEntity {
  id: string
  companyName: string
  address: string
  district: string
  number: number
  city: string
  cep: string
  cpfCnpj: string
  email: string
  telephone: string
  password: string
  secret: string
  createAt: Date
  updateAt: Date

  constructor(body: Omit<CompanyEntity, 'id'>, id = randomUUID()) {
    this.id = id
    this.companyName = body.companyName
    this.address = body.address
    this.district = body.district
    this.number = body.number
    this.city = body.city
    this.cep = body.cep
    this.cpfCnpj = body.cpfCnpj
    this.email = body.email
    this.telephone = body.telephone
    this.password = body.password
    this.secret = body.secret
    this.createAt = new Date()
    this.updateAt = new Date()
  }

}

export { CompanyEntity };