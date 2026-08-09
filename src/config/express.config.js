const express = require("express")


const app = express()


app.get('/user', (req, res, next) => {

    res.json({
        data: user,
        message: "Success",
        status: "SUCCESS FULL",
        options: null
    })
})
// app.post()
// app.patch()
// app.put()
// app.delete()

module.exports = app