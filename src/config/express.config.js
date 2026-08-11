const express = require("express")
const userRoutes = require("./router.config")


const app = express()
app.use("/api/users", userRoutes)
module.exports = app