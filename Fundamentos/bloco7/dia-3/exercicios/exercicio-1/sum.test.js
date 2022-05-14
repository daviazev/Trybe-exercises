const sum = require('./sum');

describe('Retornos da função sum', () => {
    it('retorna o resultado da função sum', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
        expect(sum(10,1)).toBe(11);
        expect(sum(100,100)).toBe(200);
        expect(sum(-100,100)).toBe(0);
        expect(sum(-250,100)).toBe(-150);
    });
    it('A função sum retorna uma mensagem de erro se for sum(4, "5")', () => {
        expect(() => sum(4, "5")).toThrowError()
        expect(() => sum(4, "5")).toThrowError('parameters must be numbers')
    });
});
