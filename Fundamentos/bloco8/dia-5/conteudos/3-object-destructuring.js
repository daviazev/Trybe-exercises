// Object Destructuring

// Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product?

const product = {
  name: "Smart TV Crystal UHD",
  price: "111.899,05",
  seller: "Casas Brasil",
};

// Uma forma seria acessar os valores utilizando a notação de objeto, como console.log(product.name), e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável. Para a nossa alegria o ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring.

// E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product. A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

// E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product. A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

// Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:

const { name, seller } = product;
console.log(name);
console.log(seller);

// Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos.

// Você deve estar se perguntando. "E se a chave do objeto contiver outro objeto como valor?" Veja o exemplo abaixo e entenda como podemos resolver este problema:

// definindo o objeto
const character = {
  name2: "Luke SkyWalker",
  age: "53",
  description: {
    specieName: "Human",
    jedi: true,
  },
  homeWorld: {
    name: "Tatooine",
    population: "200000",
  },
};

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos:

// desestruturando o objeto:
const {
  name2,
  age,
  homeWorld: { name: planetName },
  description: { jedi },
} = character;

console.log(character);

// imprimindo os valores:
console.log(
  `Esse é o ${name2}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${
    jedi ? "é um Jedi" : "não é um Jedi"
  }.`
);

// Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por :, segue a sintaxe: homeWorld: { name: planetName }. Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

// Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:

const daysOfWeek = {
  workDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  weekend: ["Saturday", "Sunday"],
};

// Temos um objeto daysOfWeek que contém as chaves workDays e weekend. Precisamos agora extrair os valores dessas chaves e, para isso, vamos utilizar a desestruturação de objetos:

const { workDays, weekend } = daysOfWeek;

console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

// Feito a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Copie o codigo acima, e teste em seu VSCode.

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo:

const student = {
  a: "Maria",
  b: "Turma B",
  c: "Matematica",
};

const { a: name3, b: classAssigned, c: subject } = student;

console.log(name3); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto. Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:

const student2 = {
  a: "Maria",
  b: "Turma B",
  c: "Matematica",
};
const name4 = student.a;
console.log(name4); // Maria

// Você deve estar se perguntando: o que acontece quando tento acessar um campo inexistente? Experimente fazer esse teste! Como sabemos, o Javascript não vai conseguir fazer essa associação porque esse campo não existe e a variável receberá o valor undefined.

// Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

// const product2 = {
//   name: "Smart TV Crystal UHD",
//   price: "1.05",
//   seller: "Casas de Minas",
// };

const printProductDetails = ({ name, price, seller }) => {
  return `Promoção! ${name} por APENAS R$ ${price} é só aqui: ${seller}`;
};

console.log(printProductDetails(product)); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas);

// Para fixar:

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name5: "Davi",
  age2: 23,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const newObj = { ...user, ...jobInfos };
const { name5, age2, nationality, profession, squad, squadInitials } = newObj;

console.log(
  `Hi, my name is ${name5}, I'm ${age2} and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad} `
);
