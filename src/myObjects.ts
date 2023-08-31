const User =  {
    name: 'Bruce',
    email: 'bruce@bruce.com',
    isActive: true
}

// the course is wrong. this is how an object is defined in TS.
function createUser({ name, isPaid }: { name: string, isPaid: boolean }){} 

createUser({name: "Joe", isPaid: true})

function createCourse():{}{}

export {}