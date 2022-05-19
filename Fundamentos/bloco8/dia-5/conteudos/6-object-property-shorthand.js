// Object Property Shorthand

// Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, contribuindo para a limpeza do código. A property shorthand é um recurso muito útil na hora de declarar objetos em Javascript. A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esses dados.

const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, "isabella", "isabella@email.com")); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Observe que as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. Essa repetição parece desnecessária, não é mesmo?

// É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:

const newUser2 = (meunome, idade, email) => {
  return {
    meunome,
    idade,
    email,
  };
};

console.log(newUser2("Davi", 23, "davi@seilá.com")); // { meunome: 'Davi', idade: 23, email: 'davi@seilá.com' }

// Muito legal, não é mesmo? Este é mais um recurso que te permite escrever códigos mais concisos!

// Para Fixar

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));
