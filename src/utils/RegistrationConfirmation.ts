import nodemailer from 'nodemailer'

class RegistrationConfirmation {
  async Confirm() {
    // params: smtp: string, port: number, email: string, password: string
    const tranporter = nodemailer.createTransport({
      host: process.env.APP_HOST,
      port:  587,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
      }
    })

    const result = await tranporter.sendMail({
      from: "eriks@winfit.com.br",
      to: "eriks@winfit.com.br",
      subject: "Confirme seu email",
      text: "olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma"
    })

    // "responseCode": 250 = Essa resposta do servidor SMTP significa simplesmente que tudo correu bem e sua mensagem foi entregue ao servidor destinatário,
    // "responseCode": 543 = deu merda,
    return result
  }
}

export default new RegistrationConfirmation()