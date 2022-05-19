// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const sum = (...parameters) => parameters.reduce((acc, curr) => acc + curr);

console.log(sum(1, 2, 3, 4, 5));
