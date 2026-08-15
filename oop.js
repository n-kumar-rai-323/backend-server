const account={
    accountNumber: "ACC001",
    ownerName:"Nishan",
    balance: 5000,

    deposit(amount){
        this.balance +=amount
    },
    withdraw(amount){
        this.balance -=amount
    }
}

account.deposit(1000)
console.log(account.balance)


const student={
    name:"Nishan Rai",
    age:25,
    course:"Javascirpt",

    study(){
        console.log(`${this.name} is studying`)
    }
}

console.log(student.name)
student.study()

class Student{
    constructor(name,age){
        this.name =name;
        this.age=age
    }

   study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Nirmal Pathak",24)

console.log(student1.name)

student1.study()




const data ="Nishan"
console.log(typeof(data))


{
    "name":"Nishan Rai",
    "email":"infoksjfjas"
}