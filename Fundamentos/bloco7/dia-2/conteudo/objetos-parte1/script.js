const customer = {
    firstName: 'Davi',
    lastName: 'Azevedo', // propriedade adicionada
    age: 23, 
    job: 'front-end jr'
}

// agora sem precisar reescrever o código

const customer1 = {
    firstName: 'Davi',
    age: 22, 
    job: 'front-end jr'
}

console.log(customer1);
customer1.lastName = 'Azevedo'
console.log(customer1);

// agora usando [colchetes]

const customer2 = {
    firstName: 'Sei la',
    age: 969,
    job: 'num faço ideia'
}

console.log(customer2);
customer2['lastName'] = 'Uai'
console.log(customer2);


// No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:

// objeto.nomeDaPropriedade.
// objeto[variavelQueContemONomeDaPropriedade].


// agora usando variáveis

const customer3 = {
    firstName: 'Roberto',
    age: 30, 
    job: 'Teacher'
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer3[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer3.firstName} ${customer3.lastName}`;
customer3[newKey] = fullName
console.log(customer3);

// No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const myFunction = (obj, key, value) => {
    obj[key] = value;
    return obj
};
const myObj = {};
const myKey = 'Name';
const myValue = 'Davi';
console.log(myFunction(myObj, myKey, myValue)); // OU 
console.log(myFunction({}, 'Name', 'Davi')); // ambas as formas são válidas
