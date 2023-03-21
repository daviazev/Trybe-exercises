/*
    Generics

    Generics é uma forma de passarmos, por meio de parâmetros, 
    tipos para funções que se comportam de forma genérica.

    Para entendermos melhor podemos refatorar o código anterior, 
    que fizemos utilizando Type Assertions, para começar a utilizar Generics:

*/

function stringToJson<T>(str: string): T {
  const result = JSON.parse(str);
  return result;
}

const user2 = stringToJson<User>(
  '{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}'
);

const address2 = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}');

user.name;
address.street;

/*

    Note que agora estamos recebendo um parâmetro genérico T na 
    função destino e esperamos que seja retornado esse mesmo tipo. 
    Na hora de utilizar a função basta somente informar o tipo 
    que gostaríamos de obter.

    Perceba que o código ainda se comporta da mesma forma que
    quando usamos Type Assertions, porém estamos tipando com 
    uma estratégia diferente.

    Optar pelo uso de Generics para casos como o do exemplo de código 
    acima, acaba sendo mais vantajoso, pois se nosso código precisar 
    passar por alterações o Generics consegue oferecer possibilidades 
    mais organizadas para escalar a tipagem. Por exemplo, vamos imaginar 
    que agora nossa função stringToJson precisará adicionar um identificador 
    único no resultado do nosso objeto. Nós vamos informar esse identificador 
    como segundo parâmetro da função, e além disso atribuir um outro tipo genérico:

*/

function stringToJson2<T, U>(str: string, id: U): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;
  return result;
}

/*

    Veja os pontos que alteramos acima:

    - O envio de múltiplos tipos por parâmetro (T e o U);

    - A possibilidade de usar o parâmetro genérico de maneira 
    distribuída na função destino (tanto no parâmetro id: U como no retorno T & { id: U });

    - A manipulação dos genéricos para modificar o tipo de retorno 
    esperado (na interseção T & { id: U })

    Note que as propriedades id de user e address têm exatamente 
    o mesmo tipo que informamos no segundo parâmetro do Generics 
    (assim como o segundo parâmetro da função). Você pode provocar
    um erro proposital trocando o tipo string por boolean, por exemplo. 
    Se fizer isso vai perceber que o TypeScript irá reclamar. 😁

    Declaramos uma variável de nome numberArray chamando a função 
    getArray e passando a ela um array de numbers, enquanto uma 
    variável stringArray é declarada com um array de strings. 
    Como o tipo any foi usado, não há nada que impeça o código 
    de enviar um string para o numberArray ou um number para o stringArray.

*/

// Mais exemplos curtos usando Generics

function identify<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

const returnNumber = identify<number, string>(100, 'Olá');
const returnString = identify<string, string>('100', 'Mundo');
const returnBoolean = identify<boolean, string>(false, 'Olá, mundo, turu bom?');

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
}

const numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push('This is not a number'); // Isto vai gerar um erro de compilação

const stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');
stringArray.push(30); // Isto vai gerar um erro de compilação
