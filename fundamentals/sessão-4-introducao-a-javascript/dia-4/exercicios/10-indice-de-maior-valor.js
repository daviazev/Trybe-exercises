
// function indiceDeMaiorValor(arr) {
//     let array = arr
//     let maior = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         }  
//         console.log("Maior = " + maior);
//     }
//     return maior
// }

// console.log(indiceDeMaiorValor([2, 11, 6, 7, 10, 1])); 


let array = [1, 2, 30, 6, 11, 22, 7]
let maior = array[0]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] >= array[j]) {
            maior = i
        } else {
            maior = j
        }
    }

}
console.log("Maior = " + maior);




  
// let numbers = [5, 9, 3, 19, 101, 8, 100, 2, 35, 2];
// let biggest_number = 0

// for (let i of numbers) {
//     if (i > biggest_number) {
//         biggest_number = i
//     }
// }

// console.log(biggest_number)