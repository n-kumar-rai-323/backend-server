const register =(req,res,next)=>{
    let payload= req.body
    res.json({
        data:payload,
        message:"Registe Route",
        status:"Success",
        options:null
    })
}

const activeAccount=(req,res,next)=>{
    res.status(200).json({
        data:null,
        message:"User account activate successfuly "
    })
}
const login=(req,res,nex)=>{
    //login logic

    res.status(200).json({
        data:null,
        message:"User logged in successfully"
    })
}



module.exports={register,login,activeAccount}


