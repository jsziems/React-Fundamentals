// standard function
let add = function (x, y) {
    return x + y
}

// Same function but with arrow syntax:
let add = (x, y) => x + y

// concise body suntax: implied return
let func = x => x*x

// block body syntax: explicit return needed
let func2 = (x, y) => {
    return X + y
}

// concise body w/implied return
let greetUser = username => `Hello, 4{username}`

// block body with explicit return
let greetUserTwo = username => {
    return `Hello, ${username}`
}

// This represents the syntax of the React component:
/*
let function = () => {
    console.log('Hello React')
}
*/
