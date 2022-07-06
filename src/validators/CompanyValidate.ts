import Joi from "joi";

const companySchema = Joi.object({
  id: Joi.string().required().max(36).min(36).rule({message: 'Nome da empresa incorreto, deve ter no maximo 100 caracteres'}),
  companyName: Joi.string().required().max(100).min(3).rule({message: 'Nome da empresa incorreto, deve ter no no minimo 3 caracteres e maximo 100 caracteres'}),
  address: Joi.string().required().max(100).rule({message: 'Endereço incorreto, deve ter no maximo 100 caracteres'}),
  district: Joi.string().required().max(50).rule({message: 'Bairro incorreto, deve ter no maximo 50 caracteres'}),
  number: Joi.number().required(),
  city: Joi.string().required().max(50).rule({message: 'Cidade incorreto, deve ter no maximo 50 caracteres'}),
  cep: Joi.string().required().max(9).min(9).rule({message: 'Cidade incorreto, deve ter 9 caracteres'}),
  cpfCnpj: Joi.string().required().min(14).max(18).rule({message: 'CpfCnpj incorreto, deve ter entre 14 e 18 caracteres'}),
  email: Joi.string().required().email().max(50).rule({message: 'Email incorreto, deve ter no maximo 50 caracteres'}),
  password: Joi.string().required().max(100).min(6).rule({message: 'Senha incorreta, deve ter no minimo 6 caracteres e no maximo 100'}),
  secret: Joi.string().required().max(100).rule({message: 'Segredo incorreto, deve ter no maximo 100'}),
  createAt: Joi.date().required(),
  updateAt: Joi.date().required(),
})


export default companySchema