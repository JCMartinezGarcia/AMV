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

    static getAllClients() {
      const query = 'SELECT * FROM `clients`';
      const clients = sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return clients;
    }

    static registerClient(clientData) {
      console.log(clientData);return
      const query = 'INSERT INTO `clients` (name, age, symptoms) VALUES ()';
      const registeredClient = sequelize.query('SELECT * FROM `clients`', {
        type: QueryTypes.INSERT,
      });
      return registeredClient;
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