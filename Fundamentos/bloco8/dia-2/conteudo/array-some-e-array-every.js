// Array.some e Array.every

// As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas funções, além de exemplos. Clique aqui e aqui para ler sobre essas funções. Leia até a seção Exemplos.

// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

const veridyFirstLetter = (letter, names) =>
  names.some((name) => name[0] === letter);

console.log(veridyFirstLetter("D", listNames));

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
  portugues: "Aprovado",
  matematica: "Reprovado",
  ingles: "Aprovado",
};

const verifyGrades = (studentGrades) =>
  Object.values(studentGrades).every((grade) => grade === "Aprovado");
console.log(verifyGrades(grades));

// Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

// Para fixar

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false. Use o método some.

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name);
};

console.log(hasName(names, "Ana"));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((idade) => idade.age >= minimumAge);
};
console.log(verifyAges(people, 16));
