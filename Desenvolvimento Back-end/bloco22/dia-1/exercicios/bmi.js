const readline = require('readline-sync');

// What’ your weight?” e “What’ your height?”, deve-se utilizar o pacote readline-sync.

const weight = readline.questionFloat(' What your weight?” (kg)');
const height = readline.question('What your height?” (m)');

const bmiCalculator = (weight, height) => weight / height ** 2;

const bmi = bmiCalculator(weight, height).toFixed(2);
let bmiResult = '';

if (bmi < 18.5) bmiResult = 'magraza';
else if (bmi <= 24.9) bmiResult = 'Peso Normal';
else if (bmi <= 29.9) bmiResult = 'Acima do peso';
else if (bmi <= 34.9) bmiResult = 'Obesidade grau I';
else if (bmi <= 39.9) bmiResult = 'Obesidade grau II';
else bmiResult = 'Obesidade grau III e IV';

console.log(bmiResult);
