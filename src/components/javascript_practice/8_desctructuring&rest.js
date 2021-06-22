const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4, undefined], NaN]
let stringVar = array[0]
let numVar = array[1]
let objVar = array[3]
let nanVar = array[array.length - 1]

console.log(stringVar, numVar, objVar, nanVar)


// Spread operator
let [string, numb, boolean, obj, arr, nan] = array;
console.log(string, numb, boolean, obj, arr, nan)

let newArr = ['a', 1, undefined, ...array]
console.log(newArr)

// How does spread work?
const testObj = {
    testString: 'stringy',
    testNum: 2,
    testBool: true,
    testObj: {key: 'waluigi'},
    testArray: [1,2,3,4,undefined],
    testNan: NaN
}

const objString = testObj.testString
const objNum = testObj.testNum
const objBool = testObj.testBool
const objObj = testObj.testObject
const objArr = testObj.testArray
const objNan = testObj.testNan

console.log(objString, objNum, objBool, objObj, objArr, objNan)

// Using destructuring...
let {testString, testNum, testBool, testObject, testArray, testNan} = testObj
console.log(testString, testNum, testBool, testObject, testArray, testNan)

// Add testString to a new object (newObj) using the spread operator on testObj.
let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj}
console.log(newObj)