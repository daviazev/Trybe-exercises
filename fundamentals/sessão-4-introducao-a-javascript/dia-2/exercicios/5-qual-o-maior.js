let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 2];
let biggest_number = 0

for (let i of numbers) {
    if (i > biggest_number) {
        biggest_number = i
    }
}

console.log(biggest_number)
