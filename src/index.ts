// let age: number = 30
// let FirstName: string = 'Montfort'
// let isFictional: boolean = true

// console.log(age, FirstName)

//arrays

let names: [string]

//type infering

let ages =[12, 15, 18]
const age = ages[2]
console.log(age)

let types = [35, true, 'hello']
const T = types[1]
console.log(T)


//object literals

let user: {firstName: string, age: number, id: number} = {
    firstName: 'luigi',
    age: 23,
    id: 1
}

user.firstName = 'mont'
user.age = 27
user.id = 2

//type inference with object literals

let person = {
    name: 'mugisha',
    score: 35
}

const P = person.name