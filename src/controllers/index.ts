import { CompanyController } from "./CompanyController";
import { CompanyService } from "../services/CompanyService";
import { MailtrapMailProvider } from "../providers/implementations/MailTrapMailProvider";



const mailTrapMailProvider = new MailtrapMailProvider()

const companyService = new CompanyService(
  mailTrapMailProvider,
)

const companyController = new CompanyController(
  companyService
)


export { companyController }