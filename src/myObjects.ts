const User =  {
    name: 'Bruce',
    email: 'bruce@bruce.com',
    isActive: true
}

// the course is wrong. this is how an object is defined in TS.
function createUser({ name, isPaid }: { name: string, isPaid: boolean }){} 

// this below won't work
// createUser({name: "Joe", isPaid: true, email: 'joe@joe.com'})

// but this will: but it's not great.
const newUser = {name: "Joe", isPaid: true, email: 'joe@joe.com'}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "react", price: 666}
}

export {}