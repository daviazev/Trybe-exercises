"use strict";
exports.__esModule = true;
var Bird_1 = require("./Bird");
var Mammal_1 = require("./Mammal");
var tiger = new Mammal_1["default"]('Tigre', new Date(Date.parse('May 03, 2020')));
// const main = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }
// main(tiger);
var main = function (animal) {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/
var parrot = new Bird_1["default"]('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
