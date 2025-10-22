//normal functions

function addTwoNumbers (a: number, b: number): number{
    return a+b
}

addTwoNumbers(3, 9)

//arrow functions

const subtractTwoNumbers = (a: number, b: number): number =>{
    return a-b
}

function addAllNumbers( items: number[]){
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

addAllNumbers([5,7,9,2,0,67])

//any type

let age: any

age = 30
age = 'name'