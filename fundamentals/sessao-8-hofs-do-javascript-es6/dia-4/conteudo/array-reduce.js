// Array.reduce;
// O reduce é diferente das outras HOFs: ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, comumente referido como acc. E o que ele faz? Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr, que é chamado de current. Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. Olhe no exemplo abaixo:

// A função soma todos os valores de um array:

// ----------- Apenas com o for: -----------

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;

// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}

console.log(sumNumbers); // 113

//----------- Com .reduce: -----------

const sumNumbers2 = numbers.reduce((result, number) => result + number);
console.log(sumNumbers2);

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3);

// Dissecando as funções:

// ----------- Usando for: -----------

// Necessidade de criar uma variável para acumular o resultado de cada iteração do for, a soma de cada resultado - let sumNumbers;
// Necessidade de setar um valor inicial para variável - sumNumbers = 0;

// ----------- Usando .reduce: -----------

// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number;

// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number;

// O retorno é salvo no primeiro parâmetro , result. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria result = result + number;

// BAAARABAM!

const collection = [1, 2, 3, 4, 5];

const getSum2 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers4 = collection.reduce(getSum);
console.log(sumNumbers4);

// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Veja a seguir, será usado o último exemplo dado da soma dos números:

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum3 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers5 = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Com a alteração:

const getSum4 = (result, number) => {
  // console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};

const sumNumbers6 = numbers2.reduce(getSum4, 100);
console.log(sumNumbers6); // 213

// Agora o resultado mudou para 213, e o primeiro número impresso foi o 100 (no console.log da  linha 72). Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador. Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce.

// ----------- com for -----------

const numbers3 = [50, 85, -30, 3, 15];

let biggestNumber = 0;

for (let index = 0; index < numbers3.length; index += 1) {
  if (numbers3[index] > biggestNumber) {
    biggestNumber = numbers3[index];
  }
}
console.log("resultado com for: " + biggestNumber); // 85

// ----------- com reduce -----------

const biggest = numbers3.reduce((acc, num) => (num > acc ? num : acc));
console.log("resultado com reduce: " + biggest); // 85

// Caso não consiga, olhe a solução abaixo:

// EU CONSEGUIIIII!

// MAS AQUI ESTÁ A SOLUÇÃO DO COURSE!

const getBigger = (bigger, number) => (bigger > number ? bigger : number);

const bigger = numbers3.reduce(getBigger, 100);
console.log(bigger); // 100

// A função passada agora pode possuir dois tipos de retorno:

// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou

// O valor do elemento do array, number, que indica que possui um valor maior que bigger.

// Modifique o segundo parâmetro passado, o 0, no reduce para 100 e execute o programa. O retorno agora é 100, já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!

// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// ---------------------- MINHAS SOLUÇÕES ----------------------

//  ----------- com filter e reduce -----------

const sumNumbers7 = numbers4
  .filter((number) => number % 2 === 0)
  .reduce((acc, num) => acc + num);

console.log(sumNumbers7);
//  ----------- somente com reduce -----------

const sumNumbers8 = numbers4.reduce((acc, num) =>
  num % 2 === 0 ? acc + num : acc
);
console.log(sumNumbers8);

// ---------------------- SOLUÇÕES DO COURSE ----------------------

// Solução usando filter e reduce:

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers9 = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

// Solução usando apenas reduce:

const sumPair2 = (currentValue, number) =>
  number % 2 === 0 ? currentValue + number : currentValue;

const sumNumbers10 = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// QUANTA COISAAAAAAAAAA
