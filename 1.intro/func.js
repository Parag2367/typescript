"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function intro(val) {
    return 'hi' + val;
}
// different wys of creating functions
function loginUser(name, email, isPaid) { }
var user = function (name, email) { };
console.log(addTwo(11));
console.log(intro('Parag'));
console.log(loginUser('Parag', '@gmail.com', false));
console.log(user('Rahul', 't@.com'));
