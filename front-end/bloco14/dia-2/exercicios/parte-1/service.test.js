const service = require('./services');
// jest.mock('./services');

describe('parte 1', () => {
  test('mockando o resultado da função random', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    // service.randomNumber();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);

    // resetando para poder criar uma nova implementação
    service.randomNumber.mockReset();

    expect(service.randomNumber()).toBe(undefined);
    expect(service.randomNumber).toBeCalledTimes(1);
    expect(service.randomNumber).toBeCalledWith();

    // acabei criando no test abaixo
  });

  test('criando uma nova implementação para a função random que receba 2 params', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumber(100, 2)).toBe(50);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);
    expect(service.randomNumber).toBeCalledWith(100, 2);
  });

  test('criando uma nova implementação para a função random que receba 3 params', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(10, 2, 5)).toBe(100);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 5);

    // resetando de novo mas aqui dentro

    service.randomNumber.mockReset();

    expect(service.randomNumber()).toBe(undefined);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);

    // criando nova implementação para a função - agora deverá retornar o dobro do valor passado :)

    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumber(100)).toBe(200);
    expect(service.randomNumber(200)).toBe(400);
    expect(service.randomNumber(400)).toBe(800);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(3);
    expect(service.randomNumber).toBeCalledWith(100);
    expect(service.randomNumber).toBeCalledWith(200);
    expect(service.randomNumber).toBeCalledWith(400);
  });
});

describe('testes das ultimas tres funções criadas', () => {
  test('nova implementação para a função toUpperCase', () => {
    service.toUpperCase = jest.fn().mockImplementation((str) => str);

    expect(service.toUpperCase('sei la o que escrever aqui')).toBe(
      'sei la o que escrever aqui'
    );

    expect(service.toUpperCase).toBeCalled();
    expect(service.toUpperCase).toBeCalledTimes(1);
    expect(service.toUpperCase).toBeCalledWith('sei la o que escrever aqui');
  });

  test('nova implementação para a função firstIndex', () => {
    service.firstIndex = jest
      .fn()
      .mockImplementation((str) => str[str.length - 1]);

    expect(service.firstIndex('deve trazer a letra P')).toBe('P');
    expect(service.firstIndex).toBeCalled();
    expect(service.firstIndex).toBeCalledTimes(1);
    expect(service.firstIndex).toBeCalledWith('deve trazer a letra P');
  });

  test('nova implementação para a função concatStr', () => {
    service.concatStr = jest
      .fn()
      .mockImplementation((str1, str2, str3) => str1 + str2 + str3);

    expect(service.concatStr('que', ' teste', ' supimpa!')).toBe(
      'que teste supimpa!'
    );

    expect(service.concatStr).toBeCalled();
    expect(service.concatStr).toBeCalledTimes(1);
    expect(service.concatStr).toBeCalledWith('que', ' teste', ' supimpa!');
  });
});

// a partir daqui eu precisei da ajuda do gabarito

describe('ultimos testes do primeiro exercicio  - testando requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test('testa requisição caso a promise funfe', async () => {
    // service.fetchDog = jest.fn().mockResolvedValue('request success');
    service.fetchDog.mockResolvedValue('request success');

    service.fetchDog();
    expect(service.fetchDog).toBeCalled();
    expect(service.fetchDog).toBeCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe('request success');
    expect(service.fetchDog).toBeCalledTimes(2);
  });

  test('testa a requisição caso a promise não funfe', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toBeCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toBeCalledTimes(1);
  });
});
