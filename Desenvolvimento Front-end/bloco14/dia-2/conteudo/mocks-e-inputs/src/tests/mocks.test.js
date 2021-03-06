const math = require('./math');
jest.mock('../services/math');
// const mockFn = jest.fn();

let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let divisivelPorDois = () => retornaNumeroAleatorio() % 2 === 0;

describe('testa a função divisivelPorDois', () => {
  test('quando o número aleatório é par, a função retorna `true`', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(4);
    expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
  });

  test('quando o número aleatório é impar, a função retorna `false`', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false); // Como garantimos que o número retornado será par?
  });

  test('Verifica se a função divisivelPorDois é chamada', () => {
    // testando se a função foi chamada
    divisivelPorDois = jest.fn();
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
  });

  test('Verifica se a função divisivelPorDois é chamada e qual o seu retorno', () => {
    // testando se a função foi chamada e qual seu retorno
    divisivelPorDois = jest.fn().mockReturnValue(true);
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
    expect(divisivelPorDois()).toBe(true);
  });

  test('testando quantas vezes a função foi chamada e qual seu retorno', () => {
    // testando quantas vezes a função foi chamada e qual seu retorno

    divisivelPorDois = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')
      .mockReturnValueOnce('eu posso escrever qualquer coisa aqui')
      .mockReturnValueOnce('oi turu bem?');

    expect(divisivelPorDois).toHaveBeenCalledTimes(0);

    expect(divisivelPorDois()).toBe('first call');
    expect(divisivelPorDois).toBeCalledTimes(1);

    expect(divisivelPorDois()).toBe('second call');
    expect(divisivelPorDois).toBeCalledTimes(2);

    expect(divisivelPorDois()).toBe('eu posso escrever qualquer coisa aqui');
    expect(divisivelPorDois).toBeCalledTimes(3);

    expect(divisivelPorDois()).toBe('oi turu bem?');
    expect(divisivelPorDois).toBeCalledTimes(4);

    expect(divisivelPorDois()).toBe('default value');
    expect(divisivelPorDois).toBeCalledTimes(5);
  });
});

describe('funções do arquivo math', () => {
  // as funções estão sendo importadas e mockadas nas primeiras linhas deste arquivo
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  test('função de somar mockada', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toBeCalled();
    expect(math.somar).toBeCalledTimes(1);
    expect(math.somar).toBeCalledWith(1, 2);
    expect(math.somar(1000, 998)).toBe(1998);
  });
});
