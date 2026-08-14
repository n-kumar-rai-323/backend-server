class AuthController{

register =(req,res,next)=>{
    let payload= req.body

    // if(!req.body.name){
    //     return res.status(400).json({
    //         message:"Name is required"
    //     })
    // }

    // if(typeof req.body.age !== "number"){
    //     return res.status(400).json({
    //         message:"Age is not a number"
    //     })
    // }

    // if(!req.body.email){
    //     return res.status(400).json({
    //         message:"Email is required"
    //     })
    // }

    res.json({
        data:payload,
        message:"Registe Route",
        status:"Success",
        options:null
    })
}

login=(req,res,nex)=>{

    res.status(200).json({
        data:null,
        message:"User logged in successfully"
    })
}
}

const authCtrl = new AuthController()

module.exports=authCtrl
