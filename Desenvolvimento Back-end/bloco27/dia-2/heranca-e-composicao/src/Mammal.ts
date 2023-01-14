import Animal from './Animal';

export default class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}
