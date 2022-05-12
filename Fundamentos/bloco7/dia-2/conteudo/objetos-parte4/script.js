// Objetos: Parte IV - Object.entries


// Outro método muito útil para se trabalhar com objetos é o Object.entries. Um pouco diferente dos métodos apresentados anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. Ficou confuso? Não se preocupe, vamos ao nosso exemplo e ver qual seria a saída:

const coolestTvShow = {
    name: 'The Big Bang Theory',
    genre: 'comedy',
    createBy: 'Chuck Lorre e Bill Prady',
    favoriteCharacter: 'Sheldon Cooper', 
    quote: 'Bazinga',
    seasons: 12
};
console.log('----- Objeto coolestTvShow -----');
console.log(Object.entries(coolestTvShow));

// Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays. Onde a primeira entrada de cada array é a chave do objeto em formato de string, e, o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo que é um number. Bem legal, não é mesmo? Vamos então agora ler a documentação até a seção "Convertendo um Object em um Map".

// Após a leitura que tal analisarmos mais um exemplo? Então bora lá:

const countries = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa'
};

console.log(); // log vazio - pula uma linha no terminal

console.log('----- Objeto countries -----');
const pairKeyValue = Object.entries(countries)

console.log(pairKeyValue);

for (index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
}
