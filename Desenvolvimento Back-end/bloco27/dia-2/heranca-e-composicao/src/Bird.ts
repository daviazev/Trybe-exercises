import Animal from './Animal';

export default class Bird extends Animal {
  constructor(public name: string) {
    super(new Date()); // super supimpa
  }

  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot = new Bird('Papagaio');

console.log(parrot.age);
parrot.fly();

/*
  Saída (código executado em Mar/2022):
  4
  Papagaio está voando!
  */
