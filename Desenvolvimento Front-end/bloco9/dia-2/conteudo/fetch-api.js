// Fetch API

// No contexto do Front-end, a maioria dos casos em que você precisa utilizar funções assíncronas são em requisições.

// Um bom exemplo é a função fetch() da Fetch API!

// A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch(), utilizada para fazer chamadas às URL's das APIs. Trata-se de uma função assíncrona, baseada em uma promise.

// A função fetch pode receber dois parâmetros:

// 1 - URL do serviço alvo da requisição;

// 2 - E, opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações por agora; nesse início, daremos essas informações para que você se acostume a usar o fetch().

// O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON ou respostas que possam ser reformatadas para tal.

// A função fetch é responsável por enviar requisições a APIs. Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.

// ---------- a partir de aqui teve um passo a passo de como instalar o node-fetch. 

/*

const fetch = require('node-fetch'); 

const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.id));
};

fetchJoke();

*/

// Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console. Bacana né?!

// Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then():

// Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do fetch.

// O .then() é usado "em cadeia", um conceito chamado de chaining. Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a resposta do fetch (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

// 

// Vamos ver o que acontece no código acima. A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json(). Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.

// Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o .catch()! Vamos adicioná-lo ao código:

const fetch = require('node-fetch'); 

const fetchJoke = () => {
    const url = 'api.chucknorris.io/jokes/random?category=dev';
    fetch(url)
     .then((response) => response.json())
     .then((data) => console.log(data.value))
     .catch((error) => console.log(`Algo deu errado :( \n${error})`));
};

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported

// Note que para forçar o erro retiramos o https:// do início da url.

// Assim como o .then() recebe o retorno caso a requisição seja bem sucedida, o .catch() recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna. Assim, quando o fetch retorna algum erro, todos os .then() são pulados e é executado o primeiro .catch() encontrado. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo ele é geralmente usado no final.