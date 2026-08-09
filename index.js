const http = require("http")
const app = require("./src/config/express.config")
const server = http.createServer(app)

const PORT = 5000
server.listen(PORT, 'localhost', (err) => {
    if (!err) {
        console.log(`Server Running.. ${PORT}`)

        console.log("Please CTRL + C to disconnect server...")

    }
})