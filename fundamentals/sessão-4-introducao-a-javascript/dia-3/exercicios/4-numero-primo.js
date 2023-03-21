let biggestPrimeNumber = 1;

for (let i = 2; i <= 10000; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i % 11 === 0 && i % i === 0 && i % 1 === 0) {
        // console.log(i + " não é primo")
    } else {
        biggestPrimeNumber = i;
    }
}

console.log("Resposta: " + biggestPrimeNumber)


// --------------------------------------- GABARITO

let xablau = 0;

for (let currentNumber = 0; currentNumber <= 10000; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    xablau = currentNumber;
  }
}

console.log("Gabarito " + xablau);

//----------------------------------------------------------------- vi na net

// const isPrime = (num) => {
//     for (let i = 2; i < num; i++)
//       if (num % i === 0) {
//         return false;
//       }
//     return num > 1;
//   };

// console.log(isPrime(5))