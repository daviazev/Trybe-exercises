// Default Parameters

// Por último, mas não menos importante, vamos entender o que é o parâmetro default. Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Você verá que a função retornará undefined. Você consegue pensar em uma forma de corrigir esse problema? Afinal, podemos esquecer de chamar a função com o nome do usuário. Uma solução seria:

const greeting2 = (user) =>
  user === undefined ? `Welcome, usuário!` : `Welcome, ${user}!`;

console.log(greeting2()); //  Welcome usuário!
console.log(greeting2("Davi")); //  Welcome Davi!

// Essa solução não parece muito elegante, não é mesmo? Afinal, precisamos de incluir uma linha para checar se o parâmetro é indefinido. Se sim, definimos que user será 'usuário'. Caso contrário, a função irá imprimir a mensagem com o nome do usuário passado como argumento.

// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

const greeting3 = (user = "usuário") => `Welcome, ${user}!`;
console.log(greeting3()); //  Welcome usuário!
console.log(greeting3("Davi")); //  Welcome Davi!

// Para Fixar

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (num1 = 1, num2 = 1) => num1 * num2;

console.log(multiply(5, 10)); // 50
console.log(multiply()); // 1
