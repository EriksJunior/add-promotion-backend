class DataToConfirmRegistration {

  getInformationFromEmail(receiver: string, id: string) {
    const dataEmail = {
      from: process.env.APP_EMAIL || "",
      to: receiver,
      subject: "Confirme seu email!",
      text: `Olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma, Clique Aqui para confirmar! http://localhost:${process.env.PORT}/company/confirmed/email?companyId=${id}`,
    }

    return dataEmail
  }

}

export default new DataToConfirmRegistration()