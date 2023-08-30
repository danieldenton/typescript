
function addTwo(num: number) {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}


function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// this is where you would declare the return type of a function
function getValue(myVal: number): boolean {
    if (myVal > 5) {
        return true
    }
    return false
}
// same for an arrow
const getHello = (s: string): string => {
return ""
}

// check this
const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3, 4]

// TS knows hero is a string below
heros.map(hero => {
    return `hero is ${hero}`
})

getUpper("hey bud")
addTwo(5)
signUpUser('river', 'river@river.com', false) 
loginUser('rp', 'r@p.com')
getValue(7)

export {}