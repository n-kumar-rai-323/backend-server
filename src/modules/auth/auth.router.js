const authRouter = require("express").Router()
const register= require("./auth.controller")



authRouter.post("/register",register)


module.exports= authRouter