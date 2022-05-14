const myFizzBuzz = require('./myFizzBuzz');

describe('Retornos da função myFizzBuzz', () => {
    it('Requisito 1', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
    });
    it('Requisito 2', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('Requisito 3', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    it('Requisito 4', () => {
        expect(myFizzBuzz(19)).toBe(19);
    });
    it('Requisito 5', () => {
        expect(myFizzBuzz('eu sou lindo')).toBe(false);
    })
});
