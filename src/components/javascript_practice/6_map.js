const instructors = [
    {name: 'Quicy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
]

let instructor_names = []
instructors.forEach(instructor => {
    instructor_names.push(instructor.name)
})

console.log(instructor_names)

const instructorNames = instructors.map(instructor => instructor.name)
console.log(instructorNames)

// Same as above, but differentparameters for .map
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
]
console.log(kvArray);
let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value
    console.log(rObj)
})