
import Joi from "joi";

class ErrorHandling{
   ErrorHandling(value: Array<Joi.ValidationErrorItem>){
    const result = value.map((e) =>{
        return e.message
      }) 
    return result
  }
}

export default new ErrorHandling()