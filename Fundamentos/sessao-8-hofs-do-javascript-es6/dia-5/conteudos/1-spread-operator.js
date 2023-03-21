// Spread Operator

// Como você faria para adicionar itens a um array? Você pode ter pensado em usar o push, como no exemplo abaixo:

const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

// Essa solução é válida, e o seu raciocínio está correto! Mas... Onde foi parar o array original numbers? Observe que quando usamos o push para adicionar algo a um array, ele será sobrescrito. Neste exemplo simples, sobrescrever o array numbers não foi um problema. No entanto, em aplicações maiores em que você precisa atualizar alguma informação de um array ou objeto, você pode querer manter as informações originais e apenas criar uma cópia do array original com o que precisa ser alterado. Em cenários como esse, vamos deixar o push de lado e usar um recurso incrível para adicionar valores a objetos iteráveis: o operador spread. E não para por aí! Você verá que o spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.

// Primeiramente, assista a este vídeo que explica o operador spread. (vídeo no course!)

// Como vimos no vídeo, o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar. Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread:

const numbers2 = [1, 2, 3];

const newArray = [...numbers2, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers2); // [ 1, 2, 3 ]

// O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:

const spring = ["OUT", "NOV", "DEZ"];
const summer = ["JAN", "FEV", "MAR"];
const fall = ["ABR", "MAI", "JUN"];
const winter = ["JUL", "AGO", "SET"];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min. Vamos ver um exemplo?

const randomNumbers = [
  1, 11, 23, 43, 24, 25, 64, -16, 984, 35, 25, 35, 27, 447, 887, 346, 234, 123,
  456, 78,
];

console.log("Maior número: ", Math.max(...randomNumbers)); // 984
console.log("Menor número: ", Math.min(...randomNumbers)); // -16

// Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:

const people = {
  id: 101,
  name: "Alysson",
  age: 25,
};

const about = {
  address: "Av. Getúlio Vargas, 1000",
  occupation: "Developer",
};

const customer = { ...people, ...about };
console.log("barabam: ", customer);

/* barabam:  {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
} */

// Para fixar

// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

const specialFruit = ["Manga", "Melancia", "Caqui"];
const additionalItens = ["GTA 6", "Sei lá mano", "Barabam"];

const fruitSalad = (specialFruit, additionalItens) =>
  [...specialFruit, ...additionalItens].every(
    (fruit) => typeof fruit === "string"
  );

console.log(fruitSalad(specialFruit, additionalItens));
