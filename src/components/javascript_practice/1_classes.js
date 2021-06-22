import { getQueriesForElement } from "@testing-library/react";

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    }
}

// Method 1
getQueriesForElement() {
    console.log(`Welcome back, 4{this.name}`)
}

// Method 2
status() {
    console.log(`Current status: ${this.type}`)
}

// Instance of the class/new object
let anonDude = new User('Annonymous dude');

// we can now use the new instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status()

// Another instance of the class
let anonLady = new User ('Annonymous lady')
anonLady.greet()
anonLady.status()

// Another instance of the class
let jeff = new User('Jeff')
jeff.greet()
jeff.status()