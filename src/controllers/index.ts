import database from '../config/database'

import { MailtrapMailProvider } from "../providers/implementations/MailTrapMailProvider";

import { CompanyController } from "./CompanyController";

import { CompanyService } from "../services/CompanyService";

import { CompanyRepo } from "../repositories/CompanyRepo";



const mailTrapMailProvider = new MailtrapMailProvider()

const companyRepo = new CompanyRepo(database)

const companyService = new CompanyService(
  mailTrapMailProvider,
  companyRepo
)

const companyController = new CompanyController(
  companyService
)


export { companyController }