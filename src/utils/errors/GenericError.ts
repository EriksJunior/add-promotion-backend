class GenericError extends Error {
  erros: any
  statusCode: number
  constructor(message: string, erros: any, statusCode: number){
    super(message)
    this.erros = erros
    this.statusCode = statusCode
  }
}

export {GenericError}


