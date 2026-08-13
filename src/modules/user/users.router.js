const userRouter=require("express").Router()


userRouter.post("/login",(req,res,next)=>{
    res.json({
        data:null,
        message:"user Route",
        status:"Success",
        options:null
    })
})


module.exports=userRouter