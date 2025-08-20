'use strict';
const {
  Model,
  QueryTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async getAllClients() {
      const clients = await sequelize.query('SELECT * FROM `clients`', {
        type: QueryTypes.SELECT,
      });
      return clients;
    }
  }
  Client.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    symptoms: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};