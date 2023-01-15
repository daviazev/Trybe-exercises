"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./src/Bird");
var ConsoleLogger_1 = require("./src/ConsoleLogger");
var Friend_1 = require("./src/Friend");
var myClass_1 = require("./src/myClass");
var Profile_1 = require("./src/Profile");
var Superclass_1 = require("./src/Superclass");
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
var parrot = new Bird_1.default('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot.age);
parrot.fly();
/*
  Saída (código executado em Mar/2022):
  4
  Papagaio está voando!
  */
var number = new myClass_1.default(100);
console.log(number.myFunc(100));
var socialMediaAccount = new Profile_1.default();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();
var socialMediaAccount2 = new Friend_1.SocialMediaAccount2();
var friendCarol = new Friend_1.Friend();
friendCarol.setNickname('Carol');
var friendFernando = new Friend_1.Friend();
friendFernando.setNickname('Fernando');
socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();
var log1 = new ConsoleLogger_1.ConsoleLogger();
var log2 = new ConsoleLogger_1.ConsoleLogger2();
var exampleDB1 = new ConsoleLogger_1.ExampleDatabase(log1);
var exampleDB2 = new ConsoleLogger_1.ExampleDatabase(log2);
var exampleDB3 = new ConsoleLogger_1.ExampleDatabase();
exampleDB1.save('kedavra', 'avada');
exampleDB2.save('blau', 'xa');
exampleDB3.save('louco', 'muito');
