// Callbacks

// Agora que o conceito de assincronicidade está mais nítido, é hora de dar luz a callbacks!

// De forma resumida, callback é uma função passada como parâmetro para outra função. Sem perceber, você viu um exemplo de função callback quando chamamos a função setTimeout. Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function, e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função. Observe a estrutura dela:

// setTimeout(1parametro, 2parametro);

// O primeiro parâmetro é uma callback sem nome: () => {}. O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).

// setTimeout(() => {}, 2000);

// Agora veremos um exemplo prático de como podemos utilizar funções callback. Copie e analise com calma cada trecho da implementação do código, se necessário, volte na explicação para que a implementação seja bem compreendida!

// Este exemplo está em português para facilitar a compreensão, os próximos estarão em inglês, ok?

const despesas = [{ gym: 99 }, {ifood: 200}, {phone: 60}, {internet: 100}];

const renda = 1000;

// Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas, despesas, é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, renda, representa o quanto esta pessoa recebeu neste mesmo mês.

// Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.

const despesaMensal = (renda, despesas, callback) => {
    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;

    console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal, que recebe três parâmetros: renda, despesas, e callback. Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".

// Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos despesas e retornará este valor para a constante despesaTotal.

const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc + curr[0], 0);
    return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

despesaMensal(renda, despesas, somaDespesas)

// Por fim, podemos observar a implementação da função callback, representada pela função somaDespesas. Essa função está tratando as informações contidas no array de objetos despesas e retornando o valor total de gastos.

// Em síntese o que fizemos foi:
// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.

// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback.

// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.

// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.

// Para fixar

// Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro (callback).

// Vamos ver um exemplo de como esse processo acontece:

// Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName} :)`;

// // Definição da função getUser

// const getUser = (param) => {
//     const userToReturn = {
//         firstName: "Ivan", 
//         lastName: 'Ivanovich', 
//         nacionality: 'Russian'
//     };
//     // Retornamos nosso parâmetro, que será uma função (callback)
//     return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

// Tenha tranquilidade e lembre-se sempre: Nada melhor do que a prática. E falando nisso... vamos praticar? ;)

// Agora, faça estes exercícios de fixação:

// 1 - Adicione uma callback como parâmetro da função getUser.

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser2`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser2(userFullName2); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNationality2); // deve imprimir "Ivan is Russian" depois de um certo tempo
