let word = 'davi';
let invert = []
for (let i = word.length; i >= 1; i--) {
    let letter = word[i-1]
    invert.push(letter)
}

console.log(invert)