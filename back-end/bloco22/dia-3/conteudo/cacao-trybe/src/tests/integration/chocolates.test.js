const chai = require('chai');
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const fs = require('fs');

const app = require('../../app.js');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates', async function () {
      const response = await chai.request(app).get('/chocolates');
      // console.log('responseee', response.body.chocolates.length);
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai.request(app).get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  // OS CÓDIGOS FEITOS A PARTIR DAQUI FAZEM PARTE DOS EXERCÍCIOS DO DIA 22.3

  //   1 - Crie os testes de integração para o endpoint GET /chocolates/total

  // Crie um caso para o código retornado
  // Crie outro caso para o retorno esperado

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade correta de chocolates, que são 4', async function () {
      const response = await chai.request(app).get('/chocolates/total');
      console.log('xablau aqui', response.body);
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ total: 4 });
    });
  });
});
