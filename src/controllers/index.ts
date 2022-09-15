import database from '../config/database'

import { MailtrapMailProvider } from "../providers/implementations/MailTrapMailProvider";

import { CompanyController } from "./CompanyController";
import { Auth } from './AuthController';

import { CompanyService } from "../services/CompanyService";

import { CompanyRepo } from "../repositories/CompanyRepo";

import { CompanyValidate } from '../validators/CompanyValidate';



const mailTrapMailProvider = new MailtrapMailProvider()

const companyRepo = new CompanyRepo(database)

const companyService = new CompanyService(
  mailTrapMailProvider,
  companyRepo,
  CompanyValidate
)

const companyController = new CompanyController(
  companyService
)

const authController = new Auth(
  companyService
)


export { companyController, authController }