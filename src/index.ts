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

//any type in arrays

let items: any[] = ['hello', 30, true, null]

items.push({id: 123})

//console.log(items)

//functions & any types

function addTogether(value: any): any{
    return value + value
} 

const resultOne = addTogether('hello') 
const resultTwo = addTogether(30) 
//console.log(resultOne, resultTwo)

//tuples: theyre like arrays but where arrays have values with same data types tuples have different types in a certain order tho

let person: [number, string, boolean] = [1, 'Mont', true]

//more examples

function useCoords(): [number, number]{

    const lat = 30
    const long = 40
    return [lat, long]
}

const [lat, long] = useCoords()

//naming tuples

let user: [name: string, age: number]

user = ['Mont', 20]
console.log(user[1])

//interfaces

interface Author {
    name: string,
    id: number
}

const firstAuthor: Author = {name: 'mario', id: 1}

interface Post {
    title: string,
    body: string,
    tags: string[],
    createdAt: Date,
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    createdAt: new Date,
    author: firstAuthor
}

console.log(newPost)

//as function argument types

function createPost(post: Post): void{
   console.log(`created post ${post.title} by ${post.author.name}`)
}

createPost(newPost)

//arrays

let posts: Post[] = []

posts.push(newPost)

//type eliases

type Rgb = [number, number, number]

function getRandomColor(): Rgb{

    const r = Math.floor(Math.random() *255)
    const g = Math.floor(Math.random() *255)
    const b = Math.floor(Math.random() *255)

    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

//example 2

type user = {
    name: string
    score: number
}

const userOne: user = {name: 'mario', score: 30}

function formatUser(user: user){
    console.log(`${user.name} scored ${user.score} marks` )
}

formatUser(userOne)