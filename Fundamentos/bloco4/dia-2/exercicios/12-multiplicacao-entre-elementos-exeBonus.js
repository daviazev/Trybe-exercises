let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];

for (let i = 0; i < numbers.length; i++) {
    if (i < numbers.length - 1) {
        let num = numbers[i] * numbers[i+1]
        newArr.push(num)
    } else if (i == numbers.length - 1) {
        numbers[i] *= 2
        newArr.push(numbers[i])
    }
}

console.log(newArr)