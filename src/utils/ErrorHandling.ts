
import Joi from "joi";

class ErrorHandling{
   ErrorHandling(value: Array<Joi.ValidationErrorItem>){
    const result = value.map((e) =>{
        const newObject = {message: e.message}
        return newObject
      }) 
      console.log(result)
    return result
  }
}

export default new ErrorHandling()