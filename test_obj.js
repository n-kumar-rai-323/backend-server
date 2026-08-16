// const { object } = require("joi")

// const user ={
//     name:"Nishan",
//     age:25,
//     email:"nishan@gmal.com"
// }


// // console.log(user.name)
// // console.log(user["name"])
// // user["address"]="tandi"
// // user.gender="Male"
// // user.age=55
// // delete user.email
// // console.log(user)






// // Object  different data types 
// // const data={
// //     name:"Nishan",   //String
// //     age:25, //number
// //     isActive:true, //boolean
// //     address:null, //null
// //     skills:["js","node"] //array
// // }

// // // object inside object

// // const user ={
// //     name:"Nishna",
// //     address:{
// //         city:"Kathmandu",
// //         country:"Nepal"

// //     }
// // }
// // console.log(user.address.city)

// // object inside array
// const data = {
//     users:["Nishan", "Rai","Hari"]
// }
// console.log(data.users[0])

// // object + array + object
// const data_array_obj={
//     users:[{name:"Nishan Rai", age:25}]
// }
// data_array_obj.users[0].name


// const exception={
//     details:[
//         {
//             message:"Name is required",
//             path:["name"]
//         },
//         {
//             message:"Email is required",
//             path:["email"]
//         }
//     ]
// }


// console.log(exception.details[1].path[0])



// [
//     {
//         message:"Name is required",
//         path:["Name"]
//     }
// ]


const exception ={
    details:[
        {
            message:"Name is required",
            path:["name"]
        },
        {
            message:"Email is required",
            path:["email"]
        },
        {
            message:"Password is required",
            path:["Password"]
        },
        {
            message:"ConfirmPassword is required",
            path:["Confirm"]
        }
    ]
}

const messageBag={}
// const field=exception.details[0].path[0]
// const message=exception.details[0].message

// console.log(field)
// console.log(message)

// messageBag[field]=message
// console.log(messageBag)
for(const detail of exception.details){
    const field=detail.path[0]
    const message=detail.message
    messageBag[field]=message
}
console.log(messageBag)
// const user = ["Ram","Sita","Gita"]
// for (let name of user){
//     console.log(name)
// }
// how many type of loop in js 
// for ... of 

// While loop : 


// let i =1
// while (i <=5){
//     console.log(i);
//     i++
// }

// do --- while  
// let i =10
// do{
//     console.log(i);
//     i++
// }while (i <=5)


// for ---- fo  Array /string 

// for -----in object keys /property names loop 


const user ={
    name:"Nisha",
    age:23,
    gender:"male",
    city:"Ktm"
}

for(let key, val in user){
    console.log(data)
}



