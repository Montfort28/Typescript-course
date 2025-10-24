"use strict";
//normal functions
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(3, 9);
//arrow functions
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 2, 0, 67]);
//any type
let age;
age = 30;
age = 'name';
//any type in arrays
let items = ['hello', 30, true, null];
items.push({ id: 123 });
//console.log(items)
//functions & any types
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(30);
//console.log(resultOne, resultTwo)
//tuples: theyre like arrays but where arrays have values with same data types tuples have different types in a certain order tho
let person = [1, 'Mont', true];
//more examples
function useCoords() {
    const lat = 30;
    const long = 40;
    return [lat, long];
}
const [lat, long] = useCoords();
//naming tuples
let user;
user = ['Mont', 20];
console.log(user[1]);
const firstAuthor = { name: 'mario', id: 1 };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    createdAt: new Date,
    author: firstAuthor
};
console.log(newPost);
//as function argument types
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 30 };
function formatUser(user) {
    console.log(`${user.name} scored ${user.score} marks`);
}
formatUser(userOne);
formatUser({ name: 'mont', score: 80 });
//union types
let someId;
someId = 1;
someId = '2';
//# sourceMappingURL=index.js.map