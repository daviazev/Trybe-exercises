let array = ['java', 'javascript', 'python', 'html', 'css',];
let biggestWord = ""
let smallestWord = "'este é um teste para saber nao sei o que, só que o palmeiras nao tem mundial'"

for (let i = 0; i < array.length; i++) {
    if (array[i].length > biggestWord.length) {
        biggestWord = array[i]
    }
    if (array[i].length < smallestWord.length) {
        smallestWord = array[i]
    }
}

console.log(biggestWord)
console.log(smallestWord)
