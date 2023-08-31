// tutroial says this is type Never but now it's Any without the type add
// This is how you add a string array.
const bands: string[] = []
// 2 dif ways of declairng and array
// const numberOfAlbums: number[] = []
const numberOfAlbums: Array<number> = []

bands.push('Black Sabbath')
numberOfAlbums.push(19)

// This will warn you if User was defined anywhere else.
type User = {
    name: string
    isActive: boolean
}

// defining an array of types
// const allUsers: User[] -- this won't work. const must be initialized.
const allUsers: User[] = []

// This won't work:
// allUsers.push({})
// This will
allUsers.push({name: '', isActive: true})