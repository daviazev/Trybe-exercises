abstract class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} está se movendo.`);
  }

  sleep() {
    console.log(`${this.name} dormindo.`);
  }
}

class Bird extends Animal {
  move() {
    super.move();
    super.sleep();
    console.log(`${this.name} está voando.`);
  }
}

class Mammal extends Animal {
  move() {
    console.log(`${this.name} está andando.`);
  }
}

class Fish extends Animal {
  move() {
    console.log(`${this.name} está nadando.`);
  }
}

const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
};

myMove(a);
myMove(b);
myMove(m);

/*
  Saída:
  Tubarão está se movendo.
  Papagaio está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */
