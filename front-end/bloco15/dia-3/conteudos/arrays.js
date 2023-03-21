console.log('USANDO PUSH');
const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario; // ambas apontam para o mesmo lugar na memória!
mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

// -- Ao passar o valor da const itemPrimario para a const mutacaoTeste, você está apenas dando a variável mutacaoTeste o apontador para o local em memória onde o valor de itemPrimario está localizado. Logo, você tem o mesmo valor apontado pelas duas variáveis.

// -- Ao utilizar o push para colocar o valor 6, como o método não faz clonagem, e sim mutação, ele alterou diretamente o local em memória que o valor estava guardado e, por isso, o valor das duas variáveis foi alterado. Isso não é permitido no Redux.

// -- Exatamente pelo fato do endereço em memória ser alterado diretamente, não tivemos a necessidade de passar o valor para a variável mutacaoTeste novamente, já que o endereço em memória permanece o mesmo.

// Agora um exemplo de cópia, num primeiro momento essa resposta parece errada, então rode esse código linha a linha e veja o que acon

console.log('---------------------------');
console.log('USANDO CONCAT');
const itemPrimario2 = [1, 2, 3, 4, 5];
let clonagemTeste2 = itemPrimario2;
clonagemTeste2.concat(6); // método que faz CLONAGEM! Ele NÃO atualiza o array, mas sim cria um novo! Para ver o novo array, é necessário atribuí-lo à uma nova variável!

console.log(clonagemTeste2);
console.log(itemPrimario2);

console.log('---------------------------');
console.log('USANDO CONCAT MAS REATRIBUINDO O VALOR');

const itemPrimario3 = [1, 2, 3, 4, 5];
let clonagemTeste3 = itemPrimario3;
const novoArray = clonagemTeste3.concat(6);

// PORQUE EU ATRIBUI O CONCAT A UMA NOVA VARIAVEL, EU CONSIGO VER O NOVO ARRAY CRIADO!!!

console.log(novoArray); // [ 1, 2, 3, 4, 5, 6 ]

console.log('OS ARRAYS ANTIGOS PERMANECEM INTACTOS!');

console.log(itemPrimario3); // OS ARRAYS ANTIGOS PERMANECEM INTACTOS!
console.log(clonagemTeste3); // OS ARRAYS ANTIGOS PERMANECEM INTACTOS!

// Outra maneira de trabalharmos com imutabilidade de arrays é com um conceito visto no módulo de fundamentos: o spread operator. Usando o mesmo array dos exemplos anteriores, desta vez com spread operator, ficaria desta forma:

console.log('---------------------------');
console.log('COM SPREAD OPERATOR');
const itemPrimario4 = [1, 2, 3, 4, 5, 6];
let spreadTeste = [...itemPrimario4, 7];
console.log(spreadTeste); // [1, 2, 3, 4, 5, 6, 7]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

// Temos esse conteúdo no começo de um dia mais voltado para exercícios, porque ele é importante para evitar algumas armadilhas na hora de criar nosso state. Os próximos exercícios vão necessitar que o conceito seja bem compreendido para serem resolvidos com tranquilidade.

// Mais uma vez, esse conteúdo é um pouco mais abstrato, então tenha calma caso você tenha dificuldades de entendimento, conforme você for fazendo exercícios, isso vai ficando mais nítido.

// Durante o dia, pense sobre quando vale a pena utilizar o Redux, pois embora seja obrigatório para efeitos de aprendizado usar Redux em todos os exercícios de hoje, vale sempre a reflexão sobre quando é interessante utilizar e quando pode ser melhor utilizar alguma outra tecnologia para controle de estado.
