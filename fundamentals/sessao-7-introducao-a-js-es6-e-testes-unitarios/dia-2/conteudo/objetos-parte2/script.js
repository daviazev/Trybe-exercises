// Objetos: Parte II - Object.keys

// Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:

const coolestTvShow = {
    name: 'The Big Bang Theory',
    genre: 'comedy',
    createBy: 'Chuck Lorre e Bill Prady',
    favoriteCharacter: 'Sheldon Cooper', 
    quote: 'Bazinga',
    seasons: 12
}

for (let property in coolestTvShow) {
    console.log(property);
}

console.log(Object.keys(coolestTvShow));

const student1 = {
    html: 'muito bom', 
    css: 'bom',
    js: 'ótimo',
    softskills: 'ótimo'
};

const student2 = {
    html: 'bom', 
    css: 'ótimo',
    js: 'mais ou menos',
    softskills: 'bom',
    git: 'grão mestre' // propriedade adicionada
};

const showSkillsStudent = (student) => {
    const array = Object.keys(student)
    for (let index in array ) {
        console.log(`${array[index]} | Nível: ${student[array[index]]}`);
    }
}
console.log('------ ESTUDANTE 1 ------');
showSkillsStudent(student1);
console.log('------ ESTUDANTE 2 ------');
showSkillsStudent(student2);

// Verifique que usamos o método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, perceba que a mesma função é utilizada para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.