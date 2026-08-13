const router = require("express").Router()
const authRouter=require("../modules/auth/auth.router")
const userRouter=require("../modules/user/users.router")
router.get("/health",(req,res,next)=>{
    res.status(200).json(
        {
            data:null,
            message:"health check",
            status:"Success",
            options:null
        }
    )}
)


// localhost:5000/api/auth/

router.use("/auth",authRouter)
router.use("/user",userRouter)

module.exports = router