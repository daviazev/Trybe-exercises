// isso aqui é um exemplo de model criado via terminal
// o comando que o criou foi o seguinte ->  
// npx sequelize model:generate --name Car.model --attributes fullName:string

// comentei o código porque não será utilizado!

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Car.model extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Car.model.init({
//     fullName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Car.model',
//   });
//   return Car.model;
// };
