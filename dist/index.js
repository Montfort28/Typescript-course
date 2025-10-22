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
console.log(items);
//# sourceMappingURL=index.js.map