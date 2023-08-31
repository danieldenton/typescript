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

// function getDbId(id: number | string){
//     console.log(`DB id is ${id}`)
// }
// getDbId(4)
// getDbId('4')

function getDbId(id: number | string){
    if (typeof id === "string") { 
        id.toLowerCase()
    }
 }

 const data: (number | string)[] = [1, 2, 3, "4"]
    
export {}