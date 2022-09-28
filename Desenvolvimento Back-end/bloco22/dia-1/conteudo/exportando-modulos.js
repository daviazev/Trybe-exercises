// Para exportar algo no sistema CommonJS, utilizamos a variável 
// global module.exports, atribuindo a ela o valor que desejamos exportar:

// brlValue.js
const brl = 5.37;

module.exports = brl;

// Como vimos anteriormente, um módulo possui um escopo isolado, ou seja,
//  suas funções, variáveis, classes e demais definições existem somente dentro do módulo.

/*
    O module.exports nos permite definir quais desses “objetos” internos 
    ao módulo serão exportados, ou seja, estarão acessíveis para os arquivos
    que importarem aquele módulo. Ele pode receber qualquer valor válido em
    JavaScript, incluindo objetos, classes, funções e afins.

    No arquivo acima, estamos exportando do nosso módulo o valor da 
    constante brl(que é 5.37), ao importarmos esse módulo, receberíamos
    o valor 5.37 como resposta. Apesar disso funcionar, exportar um único 
    valor constante assim não é comum. Vamos observar um caso que acontece com mais frequência:
*/

// brlValue.js
// const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = usdToBrl;

/*
    Perceba que podemos dar o nome que quisermos para a 
    função depois que a importamos, independente de qual é o seu nome dentro do módulo.

    Suponha que agora desejamos exportar tanto a função de 
    conversão quanto o valor do dólar (a variável brl). 
    Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:
*/

// brlValue.js
// const brl = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};
