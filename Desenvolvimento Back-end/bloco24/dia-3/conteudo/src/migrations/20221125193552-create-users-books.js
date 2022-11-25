// 💬 Como faço para criar uma chave primária composta em uma Migration do Sequelize?

// A forma mais simples de fazer isso é indicar quais campos farão parte
// dessa chave composta. Utilizando novamente o parâmetro primaryKey.
// No nosso exemplo, ao invés de usar um id único para tabela, teremos
// dois campos com parâmetro primaryKey: true, sendo userId e bookId:

// cole esse código dentro do arquivo da migration "users-books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_books', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'books',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users_books');
  },
};
