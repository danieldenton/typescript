interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user : User = new UserAccount("River", 1)



// const user: User = {
//     name: "Bruce",
//     id: 0
// }

