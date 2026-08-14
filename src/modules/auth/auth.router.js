const authRouter = require("express").Router()
const authCtrl=require("./auth.controller")



authRouter.post("/register",authCtrl.register)
authRouter.post("/login", authCtrl.login)


module.exports= authRouter