
import Joi from "joi";

class JoiErrorHandling{
   JoiErrorHandling(value: Array<Joi.ValidationErrorItem>){
    const result = value.map((e) =>{
        return e.message
      }) 
    return result
  }
}

export default new JoiErrorHandling()