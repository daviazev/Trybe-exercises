import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Author extends Model {
  declare id: number;
  declare name: string;
}

// Agora, vamos utilizar o método .init da nossa classe Author
// para iniciar a configuração para acesso ao banco de dados no primeiro parâmetro.

Author.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'authors',
    timestamps: false,
  }
);

export default Author;
