export interface IMessage {
  from: string,
  to: string,
  subject: string,
  text: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}