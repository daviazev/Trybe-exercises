// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    include: [
      { model: Address, as: 'addresses', attributes: { exclude: ['number'] } },
    ],
  });
  return employee;
};

// Unmanaged transactions

// Para esse tipo de transaction como o próprio nome diz, a transação não é
// gerenciada, é preciso indicar manualmente a circunstância em que uma
// transação deve ser finalizada ou revertida, ou seja, executar o commit
// ou rollback.

// Exemplo de código:

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();
    return employee;
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

// Managed transactions
// Nesse caso, o próprio Sequelize gerencia as transações e determina em tempo de execução,
// quando deve finalizar ou reverter uma transação:

// Exemplo de código:

const insert2 = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        {
          firstName,
          lastName,
          age,
        },
        { transaction: t }
      );

      await Address.create(
        {
          city,
          street,
          number,
          employeeId: employee.id,
        },
        { transaction: t }
      );
      return employee;
    });
    return result;
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
};

/*

Transações aumentam a confiabilidade da sua aplicação, já que respeitam 
o princípio da atomicidade, evitando popular o banco de dados de forma 
inconsistente. Sempre que for fazer algum tipo de operação que envolva 
duas ou mais tabelas, é bastante recomendado usar uma transação para 
envelopar as operações de escrita. Isso serve para operações UPDATE e 
DELETE também. Um ponto importante a se destacar é que uma vez que se 
opte por transações não gerenciadas, todo esse controle fica na mão da
pessoa desenvolvedora. Em projetos mais complexos a tarefa de ter o 
controle de todas as transações pode ser árdua. Nesses casos, prefira
sempre que o próprio Sequelize fique responsável por realizar o 
gerenciamento das transações.

*/

module.exports = { getAll, getById, insert, insert2 };
