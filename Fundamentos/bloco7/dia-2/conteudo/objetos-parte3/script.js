// Objetos: Parte III - Object.values


// O Object.values segue a mesma lógica que o Object.keys, a diferença está em que ele lista os valores de cada chave. Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow? Utilizando o for...inseria algo como:

const coolestTvShow = {
    name: 'The Big Bang Theory',
    genre: 'comedy',
    createBy: 'Chuck Lorre e Bill Prady',
    favoriteCharacter: 'Sheldon Cooper', 
    quote: 'Bazinga',
    seasons: 12
};

for(const property in  coolestTvShow) {
    console.log(coolestTvShow[property]);
}

// Podemos então refatorar para utilizar o Object.values, nosso código ficaria assim:

console.log(Object.values(coolestTvShow));

// Para fixar melhor veja abaixo mais um exemplo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores. Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values.

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for (let skill in student) {
        skills.push(student[skill])
    }
    return skills
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student1));

// Com Object.values
console.log(listSkillsValuesWithValues(student1));

// Observe como a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.