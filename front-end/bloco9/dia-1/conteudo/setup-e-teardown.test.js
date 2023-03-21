// Setup e Teardown

// Quando você está lidando com um ambiente de testes dentro do jest, é importante saber que existem 3 ciclos, sendo possível utilizar cada um deles para ajudar a configurar e realizar seus testes.

// Até esse momento, você viu como realizar os testes utilizando o Jest, que é apenas um dos ciclos possíveis. Vamos entender, a seguir, quais são os outros dois.

// Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.

// Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.

// Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.

// Maravilha! Agora que você sabe conceitualmente que existem esses ciclos dentro do ambiente de testes, você irá entender primeiro porque precisamos deles.

// Para entender isso, dê uma olhada nos códigos a seguir:

let cities = [];

const addCity = (city) => {
    cities.push(city);
};

const removeCity = (city) => {
    cities = cities.filter((eachCity) => eachCity !== city);
};

// Aqui temos a declaração de uma variável cities, que é uma lista de cidades;

// Há duas funções, addCity que adiciona cidades ao array e removeCity que... Pasmem! Remove cidades desse array.

// Agora você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.

// it('Testa a função addCity', () => {
//     expect.assertions(4);
//     addCity('São Paulo');
//     addCity('Rio de Janeiro');
//     addCity('Belo Horizonte');
//     expect(cities).toHaveLength(3);
//     expect(cities).toContain('São Paulo');
//     expect(cities).toContain('Rio de Janeiro');
//     expect(cities).toContain('Belo Horizonte');
// });

// it('Testa a função removeCity', () => {
//     expect.assertions(7);
//     removeCity('Rio de Janeiro');
//     expect(cities).toHaveLength(2);
//     expect(cities).not.toContain('Rio de Janeiro');
//     expect(cities).toContain('São Paulo')
//     removeCity('São Paulo');
//     expect(cities).toHaveLength(1)
//     expect(cities).not.toContain('São Paulo');
//     removeCity('Belo Horizonte');
//     expect(cities).not.toContain('Belo Horizonte');
//     expect(cities).toEqual([]);
// });

// Como você observou, os testes tiveram sucesso, significando que as funções estão funcionando.

// Mas... e se você criar outras funções, que também manipulam os dados das cidades?

// Isso fará com que você tenha que escrever novos testes.

// Portanto, você teria que lembrar de como o array de cidades ficou após o último teste, para poder continuar do ponto onde parou, certo?

// Imagine quanto tempo você perderia se tivesse uma aplicação com dezenas de funções?

// Para lidar com essa questão é que existem os ciclos de setup e teardown.

// Maravilha! Agora que compreendeu porque eles existem, você vai entender como eles são utilizados.

beforeEach(() => {
    cities = ['Pindamonhangaba'];
});

afterEach(() => {
    cities = [];
});

it('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
});

it('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
});


// No código acima, você declarou uma função beforeEach, que roda antes de cada um dos testes, ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles, para definir as suas configurações. Como visto antes, este é o ciclo anterior aos testes chamado de setup.

// Nesta fase, é configurado o array para ter sempre o valor ['Pindamonhangaba'], portanto, em todos os testes realizados, o valor do array será sempre o mesmo.

// Também declaramos uma função afterEach, que roda após cada um dos testes e faz a limpeza dos dados do nosso array depois de cada execução. Além disso, como o próprio nome indica, ela é executada após cada teste no terceiro ciclo dos testes, que é a fase de teardown.

// Geralmente utilizamos esta fase para limpar os valores que foram manipulados durante os testes.

// Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe, ele rodará apenas dentro dos testes que estão nesse describe.

// Ou seja, se criarmos um segundo describe, aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.

// Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.

describe('Agrupa o primeiro blocoo de testes', () => {
    beforeEach(() => {
        cities = ['Pindamonhangaba'];
    });

    afterEach(() => {
        cities = [];
    });

    it('Testa a função addCity dentro do primeiro bloco de testes', () => {
        expect.assertions(3);
        addCity('Piraporinha');
        expect(cities).toHaveLength(2);
        expect(cities).toContain('Pindamonhangaba');
        expect(cities).toContain('Piraporinha');
    });

    it('Testa a função removeCity dentro do primeiro bloco de testes', () => {
        expect.assertions(2);
        removeCity('Pindamonhangaba');
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toHaveLength(0);
    });
});

describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
        cities = ['Tangamandapio'];
    });
    afterEach(() => {
        cities = [];
    });

    it('Testa a função addCity dentro do segundo bloco de testes', () => {
        expect.assertions(3);
        expect(cities).toHaveLength(1);
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toContain('Tangamandapio')
    });

    it('Testa a função removeCity dentro do segundo bloco de testes', () => {
        expect.assertions(2);
        removeCity('Tangamandapio');
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toHaveLength(0);
    });
});
