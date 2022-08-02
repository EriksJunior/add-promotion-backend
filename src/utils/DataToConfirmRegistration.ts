class DataToConfirmRegistration {
  data(receiver: string) {

    const inviteEmail = {
      from: process.env.APP_EMAIL || "",
      to: receiver,
      subject: "Confirme seu email!",
      text: "olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma"
    }

    return inviteEmail
  }

}

export default new DataToConfirmRegistration()