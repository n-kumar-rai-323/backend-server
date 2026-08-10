const express = require("express")
const routerConfig = require("./router.config")


const app = express()


// app.use(routerConfig)
app.use("/api/v1/", routerConfig)


module.exports = app