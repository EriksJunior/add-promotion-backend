import nodemailer from 'nodemailer'

class RegistrationConfirmation {
  async Confirm() {
    const tranporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: 'eriks@winfit.com.br',
        pass: 'bmsEriks'
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