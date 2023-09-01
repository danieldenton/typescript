// const user: string[] = ["dd", ]

let tUser: [string, number, boolean]

// in a tuple the types must be assigned in the order are declared
tUser = ['hey', 12, true]

// same amount of variables as well.
let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, 'example@example.com']

// you can adjust by position.
newUser[1] = 'hey'