import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailder from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  #transporte: Mail;

  constructor() {
    this.#transporte = nodemailder.createTransport({
      host: process.env.APP_HOST,
      port: 587,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
      }
    })
  }

  async sendMail(receiver: IMessage): Promise<void> {
    await this.#transporte.sendMail({
      to: receiver.to,
      from: process.env.APP_EMAIL,
      subject: "Confirme seu email!",
      text: "olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma"
    })
  }
}