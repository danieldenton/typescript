// const User =  {
//     name: 'Bruce',
//     email: 'bruce@bruce.com',
//     isActive: true
// }

// the course is wrong. this is how an object is defined in TS.
// function createUser({ name, isPaid }: { name: string, isPaid: boolean }){} 

// this below won't work
// createUser({name: "Joe", isPaid: true, email: 'joe@joe.com'})

// but this will: but it's not great.
// const newUser = {name: "Joe", isPaid: true, email: 'joe@joe.com'}
// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "react", price: 666}
// }

// type is a variable key word with types
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User){
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

// readonly cannot be changed. In this example _id is assigned by MongoDB.
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
}

let myUser: User = {
    _id: '666',
    name: 'D',
    email: 'd@d.com',
    isActive: false
}

myUser.email = 'b@b.com'


export {}