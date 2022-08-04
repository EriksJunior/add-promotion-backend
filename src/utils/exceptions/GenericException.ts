class GenericException extends Error {
  erros: any
  statusCode: number
  constructor(message: string, erros: any,  statusCode = 422){
    super(message)
    this.erros = erros
    this.statusCode = statusCode
  }
}

export {GenericException}


