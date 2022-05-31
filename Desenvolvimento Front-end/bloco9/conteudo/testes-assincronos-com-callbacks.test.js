test('Não deveria passar! - É o tal do falso positivo', () => {
    setTimeout(() => {
        expect(10).toBe(5);
        console.log('Deveria falhar!!!');
    }, 500);
});

test('Eu já nasci falho mesmo', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
});

test('Não deveria passar! É o tal do falso positivo aqui também!', (done) => {
    setTimeout(() => {
    try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
    }   catch (error) {
        done();
    }
    }, 500);
});

// Estamos quase lá... O código acima irá gerar um falso-positivo. O motivo é que não estamos passando nenhuma ação a ser realizada quando o erro acontece e "encerramos" nosso teste com o done() sem lançar nenhum erro, dessa forma o teste é interpretado como "correto". Para resolver, podemos passar o parâmetro de erro para o catch. Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch, que vai pegar esse erro e vai encerrar nosso teste lançando um erro.

test('Não deveria passar e não passou EEEEEBAAA! Barabam!', (done) => {
    setTimeout(() => {
        try{
            expect(10).toBe(5);
            console.log('Deve falhar e falhou mesmo!');
            done();
        } catch (error) {
            done(error); // Alteramos esta linha
        }
    }, 500)
});

// Agora sim, nosso teste falhou! Isso significa que você conseguiu testar com sucesso a callback.

// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números:

const asyncSum = (a, b, callback) => {
    setTimeout(() => {
        const result = a + b // + 1 - 1 + 10 - 5 - 5 + 0.1; - os testes que eu fiz pra verificar se nao era falso positivo
        callback(result);
    }, 500);
};

it('Testando asyncSum, soma 5 + 10', (done) => {
    asyncSum(5, 10, (result) => {
        try {
            expect(result).toBe(15);
            done();
        } catch (error) {
            done(error);
        }
    });
});

// Quando estiver realizando testes, é muito importante verificar se os resultados exibidos não são falso-positivos. No exemplo acima, em que o teste está passando, experimente mudar a implementação da função asyncSum para que retorne valores incorretos e verifique se o teste irá falhar. Por exemplo, se mudarmos os resultado para ser a + b + 1 o teste falha dizendo que esperava 15, mas recebeu 16.

// Não se preocupe, vamos treinar bastante! Agora, vamos para o próximo tópico \o/

// Acredite, vai ser muito útil pois você vai conseguir economizar tempo e código ;)
