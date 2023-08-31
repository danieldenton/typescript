let score: number | string = 33

score = 333

type User = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}

let bruce: User | Admin = {name: 'Bruce', id: 444}