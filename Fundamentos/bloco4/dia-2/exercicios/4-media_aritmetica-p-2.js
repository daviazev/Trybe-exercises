let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
for (let i of numbers) {
    cont += i
}

let result = cont/numbers.length 

if (result > 20) {
    console.log("Valor maior que vinte")
} else {
    console.log("Valor menor ou igual a 20")
}