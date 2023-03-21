let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallest_number = 99999999

for (let i of numbers) {
    if (i < smallest_number) {
        smallest_number = i
    }
}

console.log(smallest_number)