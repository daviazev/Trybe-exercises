/*
    Esta é mais uma estrutura que não existe no JavaScript.
    A Interface é utilizada para declarar a forma de um objeto,
    nomear e parametrizar os tipos do objeto e compor tipos de
    objetos nomeados existentes em novos. São uma forma eficiente
    de definir um “contrato de código”, ou seja, aquilo que você
    espera que seja implementado dentro do seu código.

    Por exemplo, se quiséssemos criar uma interface que define
    as propriedades e métodos de uma pessoa funcionária, seria assim:
*/

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

/*
    Uma interface não inicializa nem implementa as propriedades declaradas
    dentro dela, porque o único trabalho de uma interface é descrever o objeto.
    Ela define o que o contrato de código exige, enquanto quem implementa a
    interface deve atender ao contrato fornecendo os detalhes de implementação necessários.
*/

let employee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(): string {
    return this.firstName + ' ' + this.lastName; // usamos o "this" para acessar as propriedades da interface
  },
};

// employee.firstName = 10; // Error: Type "number" is not assignable to type "string"

/* 
    Uma interface também pode estender de uma outra, o que permite que copiemos 
    as propriedades de uma interface em outra, proporcionando mais flexibilidade
    na maneira de separará-las em componentes reutilizáveis. Podemos estender 
    uma interface, usando a palavra reservada extends:
*/

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

// E para criar um objeto do tipo Teacher seria assim:

let teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  subject: 'Matemática',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  },
};

/*
    Observe que um objeto que atende à interface Teacher 
    precisa definir valores para todas as propriedades exigidas 
    por essa interface, incluindo as propriedades da interface base Employee.

    Por exemplo, o objeto teacher possui as propriedades firstName, 
    lastName e o método fullName da interface Employee, mas também 
    possui as próprias propriedade subject e o método sayHello 
    que são específicas da interface Teacher.

    Classes também podem implementar interfaces, o que faz com que
    a classe possua todas as propriedades e métodos daquela interface
 */

// Exercícios

interface Auto {
  marca: string;
  nome: string;
  modelo: string;
  ano: number;
  cor: string;
  // peguei as outras no gabarito
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

interface Felino {
  nome: string;
  especie: string;
  tamanho: string;
  peso: string;
  habitat: string;
}

// o exercício abaixo fiz com o gabarito

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}
