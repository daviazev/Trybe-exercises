const skills = ['html', 'css', 'javascript', 'jest', 'empatia']

const getStr = str => {
    let stringTest = 'Tryber x aqui!';
    return stringTest.includes('x', 0) ? stringTest.replace('x', str) : 'sei la'

};

const retornoDeGetStr = getStr('Davi')

const funcao2 = (stringRecebida) => {
    console.log(`${stringRecebida}\nMinhas principais skills são:`);
    const sortSkills = skills.sort()
    for (let index of sortSkills) {
    console.log(`-${index}`);
    }
}

funcao2(retornoDeGetStr)

