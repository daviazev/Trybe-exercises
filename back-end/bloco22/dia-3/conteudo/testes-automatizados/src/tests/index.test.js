const { expect } = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Testa 3 cenários diferentes para a função "calculaSituacao"', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });

  it('retorna "aprovação"', function () {
    const resposta = calculaSituacao(8);

    expect(resposta).to.be.equals('aprovação');
  });

  it('retorna "aprovação"', function () {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovação');
  });
});
