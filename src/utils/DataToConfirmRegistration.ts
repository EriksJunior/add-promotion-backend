class DataToConfirmRegistration {
  
  getInformationFromEmail(receiver: string) {
    const dataEmail = {
      from: process.env.APP_EMAIL || "",
      to: receiver,
      subject: "Confirme seu email!",
      text: "olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma"
    }

    return dataEmail
  }

}

export default new DataToConfirmRegistration()