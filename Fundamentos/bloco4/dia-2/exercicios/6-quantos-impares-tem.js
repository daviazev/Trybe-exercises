let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;
for (let i of numbers) {
    if (i % 2 !== 0) {
        cont += 1
    }
}

console.log(cont)