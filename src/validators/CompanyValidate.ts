import Joi from "joi";
import { CompanyEntity } from "../entities/CompanyEntity";
import { ValidationException } from "../utils/exceptions/ValidationException";

function CompanyValidate(company: CompanyEntity) {
  const schema = Joi.object({
    id: Joi.string().required().max(36).min(36),
    companyName: Joi.string().required().min(3).rule({ message: 'Nome da empresa incorreto, deve ter no no minimo 3 caracteres e maximo 100 caracteres' }),
    address: Joi.string().required().min(3).rule({ message: 'Endereço incorreto, deve ter no maximo 100 caracteres' }),
    district: Joi.string().required().min(3).rule({ message: 'Bairro incorreto, deve ter no maximo 50 caracteres' }),
    number: Joi.number().required(),
    city: Joi.string().required().min(3).rule({ message: 'Cidade incorreto, deve ter no maximo 50 caracteres' }),
    cep: Joi.string().required().min(8).rule({ message: 'Cep incorreto, deve ter 9 caracteres' }),
    uf: Joi.string().required().min(2).rule({ message: 'Uf incorreta' }),
    cpfCnpj: Joi.string().required().min(11).rule({ message: 'CpfCnpj incorreto, deve ter entre 14 e 18 caracteres' }),
    email: Joi.string().required().email().rule({ message: 'Email deve ser um email valido' }),
    telephone: Joi.string().min(8).rule({ message: 'Telefone deve ser valido, e deve ter no maximo 20 caracteres' }),
    password: Joi.string().required().min(6).rule({ message: 'Senha incorreta, deve ter no minimo 6 caracteres e no maximo 100' }),
    secret: Joi.string().required().min(2).rule({ message: 'Segredo incorreto, deve ter no maximo 100' }),
    confirmed: Joi.allow(),
    createdAt: Joi.date(),
    updatedAt: Joi.date().required(),
  }).options({ abortEarly: false })

  const { error } = schema.validate(company, {
    allowUnknown: true,
  })

  if (error?.details) {
    const result = error?.details.map((e) => {
      return { [e.path as any]: e.message }
    })

    throw new ValidationException('Validation failed', result, 422)
  }

}
export { CompanyValidate }
