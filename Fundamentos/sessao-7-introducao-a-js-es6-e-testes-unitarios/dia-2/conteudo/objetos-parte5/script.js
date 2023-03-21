// Objetos: Parte V - Object.assign

// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// Como você pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

// Veja o exemplo abaixo:

const person = {
    name: 'Davi', 
    lastName: 'Azevedo',
    age: 23
};

const info = {
    age: 23, 
    job: 'front-end jr'
};

const family = {
    children: ['Lutero', 'É o nome do meu cachorro'],
    wife: 'Tamires'
};

console.log('----------- Usando Objeto assign -----------');
Object.assign(person, info, family)
console.log(person);

// Como você pode ver, o método Object.assign adicionou as propriedades de info e de family ao objeto person. Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info. Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.

// Agora, observe o exemplo abaixo.

const person2 = {
    name: 'Roberto'
};

const lastName = {
    lastName: 'Silva'
};

const fullName = { // adicionado por mim para testar
    fullName: 'TESTE TESTE TESTE'
}

const clone = Object.assign(person2, lastName, fullName)
console.log(clone);
console.log(person2);

// Como pôde ver acima, o clone é exatamente igual ao objeto person, e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades.

// Que tal fazer um teste para confirmar isso?

clone.name = 'Maria';
console.log('Mudando a propriedade name através do objeto clone');
console.log(clone);
console.log(person2);
console.log('------------------');

person2.lastName = 'Ferreira'

console.log('Mudando a propriedade lastName através do objeto person2');
console.log(clone);
console.log(person2);

// Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável para armazenar o retorno do método Object.assign, cria-se apenas um outro "caminho" para modificar ou acessar os dados do objeto destino (nesse caso, person). No exemplo abaixo, é apresentada outra forma de se copiar um objeto.

const obj = {value: 10, value2: 11};
const cloneObj = obj;

cloneObj.teste = 'teste'

console.log(obj);
console.log(cloneObj);

// Se você modificar o cloneObj, verá que novamente teremos o mesmo resultado anterior, de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?

// Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo. 

console.log();
console.log('-----------------------------');


const person3 = {
    name: 'Rafael', 
};

const lastNamePerson3 = {
    lastName: 'Luiz'
};

const newPerson = Object.assign({}, person3, lastName);
newPerson.name = 'Davi';
console.log(newPerson);
console.log(person3);

// Agora, apenas o objeto newPerson será modificado.
