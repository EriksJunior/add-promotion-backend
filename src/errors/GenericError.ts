export class GenericError {
  message: string
  constructor(column: string){
  this.message = `the ${column} is invalid` 
  }
}


