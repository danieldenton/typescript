// interface is liie a loose class. More like that than an object like type.

// ? means optional.

interface  User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string
    // you define a method in an interface like so. String is what it needs to return.
    getCoupon(couponName: string, value: number): number
    // above take in a string and retuns a number.
}

// you can add things onto Use as well. See below. Reopening the interface.
interface User {
    githubToken: string
}

// interface can extend. They can extend more than one. Types can be specifically defined as below with | (ors) 
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const d: User = { 
    startTrial: () => {
    return "trial has started"
}, 
   getCoupon: (name: "bruce", value: 4) => {
    return 6
},
    dbId: 444,
    githubToken: 'fnewihfc',
    email: "d@d.com",
    userId: 666 
} 