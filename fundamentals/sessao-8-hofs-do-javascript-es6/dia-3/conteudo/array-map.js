// Array.map;

// A função map possui a mesma estrutura das outras HOFs, o que muda é o seu retorno.

// Veja a diferença entre fazer uma mesma função usando for e em seguida usando map:

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// Agora com a função map:

const fullNames2 = persons.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log(fullNames2);

// BAAAAARABAAAAM!!!

// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) =>
  number > 0 ? number * -1 : number
);

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ] - novo array
console.log(numbers); // [ 1, 2, 3, 4, -5 ] - array original

// E como seria apenas com for?

const negativeNumbers2 = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers2.push(numbers[index] * -1);
  } else {
    negativeNumbers2.push(numbers[index]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// MÓ ROLÊ!

// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ["Arroz", "Feijão", "Alface", "Tomate"];
const prices = [2.99, 3.99, 1.5, 2];

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:

const listProducts = [{ Arroz: 2.99 }, "..."];

// Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as HOFs podem receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada! Use isso em seu favor. Caso tenha dúvidas, olhe a solução logo abaixo.

// MINHA RESOLUÇÃO - fiz quase tudo sozinho, tive que ver a dica no course :)
// a do course tá igualzinha, mas eu fiz bastante, não copiei tudo

const result = (arrayProducts, arrayPrices) => {
  return arrayProducts.map((product, index) => ({
    [product]: arrayPrices[index],
  }));
};

console.log(result(products, prices));

// E antes de seguir em diante, uma pergunta que provavelmente lhe veio! Qual a diferença, afinal, de map para o forEach? São duas principais:

// O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

// A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.

// Ficou mais claro? Em caso de dúvidas, pense neste exemplo:

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); //[ 2, 4, 6, 8, 10, 12 ]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  numero < 5 && numero % 2 === 0
    ? paresMenoresQueCinco.push(numero)
    : undefined; // no course tava com if, mas quis fazer com op ternário
});

console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// Pense sempre que o forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!

// Agora, hora de ver como pode-se usar as outras HOFs junto com o map. Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "91" },
      { name: "Português", nota: "85" },
      { name: "Química", nota: "92" },
      { name: "Biologia", nota: "90" },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "70" },
      { name: "Português", nota: "70" },
      { name: "Química", nota: "60" },
      { name: "Biologia", nota: "50" },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "80" },
      { name: "Português", nota: "82" },
      { name: "Química", nota: "79" },
      { name: "Biologia", nota: "75" },
    ],
  },
];

// Segue-se alguns exemplos de funções apenas usando for e depois como refatorá-las para quem usem HOFs.

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1) {
  if (estudantes[index].turno === "Manhã") {
    allNameStudents.push(
      `${estudantes[index].nome} ${estudantes[index].sobrenome}`
    );
  }
}

console.log(allNameStudents);

// Com map e filter.

const allNameStudents2 = estudantes
  .filter((estudante) => estudante.turno === "Manhã")
  .map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents2);

// BAAAARAAABAAAAAM

// O que foi feito? Primeiro usou-se o filter para filtrar todos os estudantes que estudam no período da manhã. Como o retorno do filter é um array de elementos, você pode usar o map logo em seguida para retornar os nomes completos de estudantes presentes nesse novo array. O map nesse caso é usado apenas para retornar as informações pedidas, o nome completo, enquanto o filter é usado para filtrar o array.

// Agora vamos usar um map com um find.

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

// Apenas com for:

const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].nome === name) {
      return students[index];
    }
  }
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.materias.length; index += 1) {
    if (getStudent.materias[index].nota >= 60) {
      report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
      report.push(`${getStudent.materias[index].name} Reprovado`);
    }
  }
  return report;
};

console.log(reportStatus("Natalia", estudantes));

// Com find e map:

const reportStatus2 = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map(
    (materia) =>
      `${materia.name} ${materia.nota >= 60 ? "Aprovado" : "Reprovado"}`
  );
};

console.log(reportStatus2("Natalia", estudantes));
