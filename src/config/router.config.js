const router = require("express").Router()




router.get("/", (req, res, next) => {

    const data = {
        data: [
            {
                id: 1,
                name: "Nishan Rai",
                email: "nishan@gmail.com"
            },
            {
                id: 2,
                name: "Sita Sharma",
                email: "sita.sharma@gmail.com"
            },
            {
                id: 3,
                name: "Ramesh Thapa",
                email: "ramesh.thapa@gmail.com"
            },
            {
                id: 4,
                name: "Anita Gurung",
                email: "anita.gurung@gmail.com"
            },
            {
                id: 5,
                name: "Bikash Shrestha",
                email: "bikash.shrestha@gmail.com"
            },
            {
                id: 6,
                name: "Sunita Basnet",
                email: "sunita.basnet@gmail.com"
            },
            {
                id: 7,
                name: "Prakash Adhikari",
                email: "prakash.adhikari@gmail.com"
            },
            {
                id: 8,
                name: "Kabita Karki",
                email: "kabita.karki@gmail.com"
            },
            {
                id: 9,
                name: "Deepak Magar",
                email: "deepak.magar@gmail.com"
            },
            {
                id: 10,
                name: "Rita Poudel",
                email: "rita.poudel@gmail.com"
            }
        ],
        message: "Users retrieved successfully",
        status: "Success"

    };

    res.json(
        {
            data: data,
            message: "Health OK",
            status: "Success",
            options: null
        }
    )
})

router.get("/:id", (req, res, next) => {
    const response = {
        data:
        {
            id: req.params.id,
            name: "nishan Rai",
            email: "nisharai@gmal.com"
        },

        message: "User retrived successfully",
        status: "Success"
    }

    res.json(response)
})



router.post("/", (req, res, next) => {

})
module.exports = router