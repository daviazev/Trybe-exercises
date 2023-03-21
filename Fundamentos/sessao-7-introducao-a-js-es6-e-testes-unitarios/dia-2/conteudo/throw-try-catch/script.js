const sum = (value1, value2) => value1 + value2;

console.log(sum(1,2));

console.log(sum(2, '3')); // resultadp: 23

// Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem *dinâmica*. Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.

const sum2 = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return 'erro: os valores devem ser numéricos'
    }
    return value1 + value2
}

console.log(sum2(5,5));
console.log(sum2(5,'5'));


// agora usando throw new Error 

const sum3 = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser numéricoss');
    }
    return value1 + value2;
}

console.log((sum3(3,1)));

// agora com try/catch

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('not funfou: Os valores devem ser numéricos')
    }
}

const sum4 = (value1, value2) => {
    try{
        verifyIsNumber(value1, value2);
        return `funfou: ${value1 + value2}`
    } catch (error) {
        throw error.message;
    }
};

console.log(sum4(10,'2'));
