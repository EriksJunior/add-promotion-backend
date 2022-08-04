import nodemailer from 'nodemailer'
class RegistrationConfirmation {
  async Confirm(receiver: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.APP_HOST,
      port:  587,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
      }
    })

    const result = await transporter.sendMail({
      from: process.env.APP_EMAIL,
      to: receiver,
      subject: "Confirme seu email!",
      text: "olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma"
    })

    
    return result
  }
}

export default new RegistrationConfirmation()