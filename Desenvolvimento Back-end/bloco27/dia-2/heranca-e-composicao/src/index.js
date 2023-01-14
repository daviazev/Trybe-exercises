"use strict";
exports.__esModule = true;
var Bird_1 = require("./Bird");
var Superclass_1 = require("./Superclass");
var main = function (animal) {
    console.log(animal.age);
};
var myFunc = function (obj) {
    if (obj.isSuper)
        return console.log('Supeeeer!');
    return console.log('Suuuub');
};
var ex1 = new Superclass_1.Superclass();
var ex2 = new Superclass_1.Subclass();
myFunc(ex1);
myFunc(ex2);
var parrot = new Bird_1["default"]('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot.age);
parrot.fly();
/*
  Saída (código executado em Mar/2022):
  4
  Papagaio está voando!
  */
