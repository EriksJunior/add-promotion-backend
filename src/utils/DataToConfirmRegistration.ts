class DataToConfirmRegistration {

  getInformationFromEmail(receiver: string) {
    const dataEmail = {
      from: process.env.APP_EMAIL || "",
      to: receiver,
      subject: "Confirme seu email!",
      text: "Olá, somos do promotionAPP por favor confirme seu email para utilizar nossa plataforma, Clique Aqui para confirmar! http://localhost:3333/company/confirmed/email?companyId=bda126da-2db7-424c-9457-d8acbc6dac06",
    }

    return dataEmail
  }

}

export default new DataToConfirmRegistration()