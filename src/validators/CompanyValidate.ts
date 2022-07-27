import Joi from "joi";

const companyValidate = Joi.object({
  id: Joi.string().required().max(36).min(36),
  companyName: Joi.string().required().max(100).min(3).rule({message: 'Nome da empresa incorreto, deve ter no no minimo 3 caracteres e maximo 100 caracteres'}),
  address: Joi.string().required().max(100).rule({message: 'Endereço incorreto, deve ter no maximo 100 caracteres'}),
  district: Joi.string().required().max(50).rule({message: 'Bairro incorreto, deve ter no maximo 50 caracteres'}),
  number: Joi.number().required(),
  city: Joi.string().required().max(50).rule({message: 'Cidade incorreto, deve ter no maximo 50 caracteres'}),
  cep: Joi.string().required().max(9).min(8).rule({message: 'Cep incorreto, deve ter 9 caracteres'}),
  uf: Joi.string().required().max(2).min(2).rule({message: 'Uf incorreta'}),
  cpfCnpj: Joi.string().required().min(11).max(18).rule({message: 'CpfCnpj incorreto, deve ter entre 14 e 18 caracteres'}),
  email: Joi.string().required().email().rule({message: 'Email deve ser valido, e deve ter no maximo 50 caracteres'}),
  telephone: Joi.string().min(8).max(20).rule({message: 'Email deve ser valido, e deve ter no maximo 50 caracteres'}),
  password: Joi.string().required().max(100).min(6).rule({message: 'Senha incorreta, deve ter no minimo 6 caracteres e no maximo 100'}),
  secret: Joi.string().required().max(100).rule({message: 'Segredo incorreto, deve ter no maximo 100'}),
  confirmed: Joi.boolean(),
  createdAt: Joi.date(),
  updatedAt: Joi.date().required(),
}).options({ abortEarly: false })


export default companyValidate
