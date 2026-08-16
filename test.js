// const data_one ={
//     name:"Nishan",
//     age:25
// }

// // console.log(data.name)

// // Object to Object
// const data={
//     user:{
//         name:"Nishan",
//         age:25
//     }
// }
// console.log(data.user.name)

// const data_array ={
//     users:["Nishan Rai","Ram","Hari"]
// }
// console.log(data_array.users[0])

// // Object + Array + Object 
// const data_array_object={
//     users:[
//         {
//             name:"Nishan Kumar Rai",
//             age:25
//         },
//         {
//             name:"Nikita Rai",
//             age:25
//         }
//     ]
// }
// console.log(data_array_object.users[1].name)


const exception={
    details:[
        {
            message:"Name is required",
            path:["name"]
        },
         {
            message:"Age is required",
            path:["age"]
        }
    ]
}
// console.log(exception.details[0].path[0])
// console.log(exception.details[1].message)


const messageBag ={}
// messageBag.name=exception.details[0].message
// console.log(messageBag)

const field = exception.details[0].path[0]
const message=exception.details[0].message
console.log(field)
console.log(message)


messageBag[field]=message
console.log(messageBag)

for(const detail of exception.details){
    const field = detail.path[0]
    const message=detail.message
    messageBag[field]=message
}
console.log(messageBag)