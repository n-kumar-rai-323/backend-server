const bodyValidator=(schema)=>{
    return async(req,res,next)=>{
      try{
        //  const data = req.body
    //    let response=await schema.validateAsync(data,{abortEarly:false})
        let response=await schema.validateAsync(req.body,{abortEarly:false})
        req.body=response
        next()
      }catch(exception){
        // let messageBag={}
        // if(exception.details){
        //     exception.details.map((val)=>{
        //         messageBag[val.context.label]=val.message;
        //     })
        // }
        // console.log(exception)
        console.log({details:exception.details})
        console.log({details:exception.details[0].context})
        res.status(422).json({
            error:null,
            message:"Please Check Data",
            status:"FAILED",
            options:null
        })
      }
    }   
}



// const middleware=bodyValidator()

module.exports=bodyValidator