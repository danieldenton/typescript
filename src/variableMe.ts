let greetings: string = "hey bud"

console.log(greetings.indexOf("t"))

// number not numbers, int or float
let userId: number = 444.44

// boolean
let isLoggedIn: boolean = false

// this is enough. TS will recognize this is a number.
let id = 666

// this would equal any
// let rp
// noImplicitAny will not allow  this.
let rp: string

function getArtis() {
    return "River Priest"
}

rp = getArtis()


export {}