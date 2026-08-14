const Joi = require("joi")



const UserRegisterDTO=joi.object({
    name:Joi.string().min(2).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    confirmPassword:Joi.string().valid(Joi.ref("password")).required(),
    phone:Joi.string().allow("").optional()
})

module.exports=UserRegisterDTO