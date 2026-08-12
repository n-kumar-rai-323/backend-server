const express = require("express")
const userRoutes = require("./router.config")


const app = express()
app.use(express.json())
app.use(express.urlencoded())

// app.use((req,res,next)=>{
//     console.log("I am always executed")
//     next() 
// })

// app.use((req,res,next)=>{
//     console.log("I am always executed")
//     next()
// })

app.use("/api/users", userRoutes)
module.exports = app