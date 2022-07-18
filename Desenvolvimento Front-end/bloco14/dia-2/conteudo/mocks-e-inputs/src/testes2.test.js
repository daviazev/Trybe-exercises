const math = require('./math');

test('#somar', () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(10, 5);

  expect(math.somar).toBeCalledTimes(1);
  expect(math.somar(4, 1)).toBe(3);
  expect(math.somar).toBeCalledTimes(2);
  expect(math.somar).toBeCalledWith(4, 1);

  // resetando o mock

  math.somar.mockReset();

  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toBeCalledTimes(1);
  expect(math.somar).toBeCalledWith(1, 2);

  // criando o mock e substituindo a implementação para uma multiplicação
  math.somar = jest.fn().mockImplementation((a, b) => a * b);

  math.somar(10, 5);

  expect(math.somar).toBeCalledTimes(1);
  expect(math.somar(10, 5)).toBe(50);
  expect(math.somar).toBeCalledTimes(2);
  expect(math.somar).toBeCalledWith(10, 5);

  // resetando o mock

  math.somar.mockReset();

  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toBeCalledTimes(1);
  expect(math.somar).toBeCalledWith(1, 2);

  // QUE DOIDEIRA
});
