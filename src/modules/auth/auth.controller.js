const register =(req,res,next)=>{
    let payload= req.body
    res.json({
        data:payload,
        message:"Registe Route",
        status:"Success",
        options:null
    })
}




module.exports=register