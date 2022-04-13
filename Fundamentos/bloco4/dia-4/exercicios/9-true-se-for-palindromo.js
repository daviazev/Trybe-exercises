function string(str) {
    let word = str
    let wordInvert = ""
    for (let i = 0; i < word.length; i++) {
         wordInvert += word[word.length - i - 1]
         console.log(wordInvert);
    }
    if (word == wordInvert) {
        return true
    } else {
        return false
    }
}
console.log(string("arara"));

