class User {
    constructor(first, last, e) {
        this.f = first
        this.l = last
        this.email = e
    }
}

let userOne = new User("Paul", "O'Connor", "po2e.org")
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l) // O'Connor
console.log(userOne) // User {f : "Paul"...}