// PARA FIXAR

export class Superclass {
  constructor(public isSuper: boolean = true) {}

  sayHello() {
    console.log('Olá mundo!');
  }
}

export class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}
