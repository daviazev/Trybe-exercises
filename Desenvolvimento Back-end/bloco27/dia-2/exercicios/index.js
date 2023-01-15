"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./src/Person");
var valid = new Person_1.default('Davi', new Date('1998-08-10 10:00:00'));
// const invalidName = new Person('Da', new Date('1998-08-10')); // dá erro porque o nome é muito curto
// const invalidDate = new Person('Davi', new Date('2030-08-10')); // dá erro porque essa data é futura
console.log(valid);
// console.log(invalidName);
// console.log(invalidDate);
