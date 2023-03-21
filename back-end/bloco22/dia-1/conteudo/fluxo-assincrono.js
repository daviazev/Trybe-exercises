// Exemplo 1: Tratando erros de forma síncrona.

function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error('Não pode ser feito uma divisão por zero');

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

// Exemplo 2: Tratando erros de forma assíncrona.

function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

dividirNumeros(2, 1)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));

// Funções Async/Await

function dividirNumeros2(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

//Precisamos ter bastante atenção aqui 😳! A função que fizer a chamada da Promise
// dividirNumeros (ou qualquer outra função que retorne uma Promise) deve ser definida
// como async, conforme o exemplo a seguir:

const doSomething = async () => {
  console.log(await dividirNumeros2(2, 2));
};

// As funções async podem ser encadeadas facilmente e, além disso, seu
// código será muito mais legível, se comparado ao uso de Promises.
// Veja o exemplo a seguir:

const promiseParaFazerAlgumaCoisa = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Eu fiz alguma coisa'), 2000);
  });
};

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promiseParaFazerAlgumaCoisa();
  return something + '\n e Eu vi você fazendo';
};

const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa();
  return something + '\n e Eu também vi você vendo ele fazendo';
};

// a função xablau foi feita por este que escreve
const xablau = async () => {
  const ehMesmo = await AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa();
  return ehMesmo + '\n XABLAU';
};

xablau().then((res) => {
  console.log(res);
});
