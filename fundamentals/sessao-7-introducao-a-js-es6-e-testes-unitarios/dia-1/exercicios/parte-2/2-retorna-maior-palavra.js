
const longestWord = (str) => {
    let biggestWord = '';
    const arr = str.split(' ')
    for (let index of arr) {
        if (index.length > biggestWord.length) {
            biggestWord = index
        }
    }
    return biggestWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
