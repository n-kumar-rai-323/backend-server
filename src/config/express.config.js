const express = require("express")
const routes = require("./router.config")


const app = express()
app.use(express.json())


// app.use((req,res,next)=>{
//     console.log("I am always executed")
//     next() 
// })

// app.use((req,res,next)=>{
//     console.log("I am always executed")
//     next()
// })

app.use("/api", routes)
module.exports = app