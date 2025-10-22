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
//functions & any types
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(30);
console.log(resultOne, resultTwo);
//tuples: theyre like arrays but where arrays have values with same data types tuples have different types in a certain order tho
let person = [1, 'Mont', true];
//more examples
function useCoords() {
    const lat = 30;
    const long = 40;
    return [lat, long];
}
const [lat, long] = useCoords();
//# sourceMappingURL=index.js.map