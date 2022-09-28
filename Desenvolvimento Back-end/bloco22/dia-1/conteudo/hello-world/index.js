// console.log('Hello, world!');
// console.log('XABLAU');

const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('How old are you? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

// console.log('Hello, world!');