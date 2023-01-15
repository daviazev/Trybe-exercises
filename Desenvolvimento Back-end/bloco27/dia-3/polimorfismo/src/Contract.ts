import Person from './Person';

class Contract {
  static _number = 0;
  constructor(public broker: Person) {}
  static get number() {
    return this._number;
  }
}

const c1 = new Contract(pp0);
console.log(c1.broker.cpf); // Erro, pois não existe cpf em Person
