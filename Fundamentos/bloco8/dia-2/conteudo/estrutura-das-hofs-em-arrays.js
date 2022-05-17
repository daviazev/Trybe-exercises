// Estrutura das HOFs em Arrays

// As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ["josé", 50, 0.25, { comida: "chocolate" }];
arrayOfValues.forEach((element) => {
  console.log("Cada elemento do array:", element);
});

// Sua estrutura:

arrayOfValues.forEach((element) => {
  console.log("Cada elemento do array:", element);
});

// Suas partes:

// arrayOfValues - Nome do array que será percorrido;

// .forEach - A HOF, pode ser, .find, .some, .every;

// element - Valor do elemento do array;

// (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade.

// É isso mesmo! Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array. Em português, é como se:

const meuArray = [1, 2, 3, 4, 5, 6];

meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});

// Significasse Verifique se cada elemento do meu array é múltiplo de 2.

// Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco.

// Ficou mais claro agora? A própria Higher Order Function se encarrega da lógica de pegar cada elemento do array e passar como parâmetro para a arrow function. Com for você faria isso manualmente, a proposta aqui é a HOF fazer pra você! Sua única preocupação deve ser "O que eu quero fazer com cada elemento do array?", e não "Como eu acesso cada elemento do array?".

// Observe abaixo que podemos passar mais de um parâmetro para a função também. As HOFs disponibilizam para você, caso precisar, acesso a mais informações do array:

console.log(); // pula linha no terminal
console.log(); // pula linha no terminal
console.log(); // pula linha no terminal
console.log(); // pula linha no terminal

arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log("------------------------");
  console.log("Cada elemento do array:", element);
  console.log("Index, posição do elemento: ", indexOfTheArray);
  console.log("Array percorrido:", theEntireArray);
});

// A arrow function passada para o forEach possui element, index e array como parâmetros, onde:

// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.

// Agora que já aprendeu sobre a estrutura, vamos nos aprofundar em cada uma das HOF.
