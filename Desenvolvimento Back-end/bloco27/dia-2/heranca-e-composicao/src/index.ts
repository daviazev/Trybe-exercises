import Animal from './Animal';
import Bird from './Bird';
import Mammal from './Mammal';
import { Subclass, Superclass } from './Superclass';

const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));

// const main = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }

// main(tiger);

const main = (animal: Animal) => {
  console.log(animal.age);
};

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/

const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));

console.log(parrot.age);
parrot.fly();

const myFunc = (obj: Superclass) => {
  obj.sayHello();
};

const ex1 = new Superclass();
const ex2 = new Subclass();

myFunc(ex1);
myFunc(ex2);
