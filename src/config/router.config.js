// const express = require("express")
// const Router = express.Router;
// const routerConfig = Router()

const routerConfig = require("express").Router()


routerConfig.get("/", (req, res, next) => {
    res.status(200).json({
        data: null,
        messages: "Success Get",
        status: "Success",
        options: null

    })
})

routerConfig.post("/users", (req, res, next) => {
    res.json({
        data: null,
        messages: "User Create successfully",
        status: "Success",
        options: null

    })
})


routerConfig.put("/user", (req, res, next) => {
    res.json({
        data: null,
        messages: "User updated successfully",
        status: "Success",
        options: null

    })
})


routerConfig.patch("/user", (req, res, next) => {

    res.json({
        data: null,
        messages: "User partially updated successfully",
        status: "Success",
        options: null

    })
})
routerConfig.delete("/user", (req, res, next) => {

    res.json({
        data: null,
        messages: "User deleted successfully",
        status: "Success",
        options: null

    })
})

module.exports = routerConfig