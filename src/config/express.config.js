const express = require("express")
const routes = require("./router.config")
const app = express()
app.use(express.json())



app.use("/api", routes)
module.exports = app

