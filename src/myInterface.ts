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

const d: User = { 
    startTrial: () => {
    return "trial has started"
}, 
   getCoupon: (name: "bruce", value: 4) => {
    return 6
},
    dbId: 444,
    email: "d@d.com",
    userId: 666 
} 