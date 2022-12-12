// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date;
  age?: number;
  // aprenderemos mais sobre o construtor na próxima seção
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, age?: number) {
    // usamos o this para acessar as propriedades da instância da classe,
    // ele representa a própria instância que estamos criando
    // atribuímos o valor do parâmetro recebido a propriedade da instância da classe

    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} está falando`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  }

  walk(): void {
    console.log(`${this.name} está andando]`);
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person('Jane Doe', new Date('1986-01-01'), 27);
const person2 = new Person('Jon Doe', new Date('1980-08-05'), 42);

console.log(person1);
person1.speak();

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 27
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."

// Exercícios

interface Dog {
  nome: string;
  idade: number;
  raca: string;
  cor: string;
  falar(frase: string): string;
}

class Dog {
  constructor(nome: string, idade: number, raca: string, cor: string) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.cor = cor;
  }

  falar(frase: string) {
    return `${this.nome} diz: ${frase}`;
  }
}

interface Casa {
  largura: string;
  altura: string;
  qttComodos: number;
  endereco: string;
}

class Casa {
  constructor(
    largura: string,
    altura: string,
    qttComodos: number,
    endereco: string
  ) {
    this.largura = largura;
    this.altura = altura;
    this.qttComodos = qttComodos;
    this.endereco = endereco;
  }
}

interface Voo {
  origem: string;
  destino: string;
  preco: string;
  qttPassageiros: number;
}

class Voo {
  constructor(
    origem: string,
    destino: string,
    preco: string,
    qttPassageiros: number
  ) {
    this.origem = origem;
    this.destino = destino;
    this.preco = preco;
    this.qttPassageiros = qttPassageiros;
  }
}
