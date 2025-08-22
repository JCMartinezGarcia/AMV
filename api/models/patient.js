'use strict';
const {
  Model,
  QueryTypes,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static getAllPatients() {
      const query = 'SELECT * FROM `patients`';
      const patient = sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return patient;
    }

    static registerPatient(patientData) {
      const { name, age, symptoms } = patientData;
      const query = 'INSERT INTO patients (name, age, symptoms) VALUES (:name, :age, :symptoms)';
      const registeredPatient = sequelize.query(query, {
        replacements: { name, age, symptoms },
        type: QueryTypes.INSERT,
      });
      return registeredPatient;
    }

    static updatePatient(patientData, id) {

      const { name, age, symptoms } = patientData;

      const query = 'UPDATE patients SET name = :name, age = :age, symptoms = :symptoms WHERE id = :id';
      const updatedPatient = sequelize.query(query, {
        replacements: { name, age, symptoms, id },
        type: QueryTypes.UPDATE,
      });
      return updatedPatient;
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    age: DataTypes.NUMBER,
    symptoms: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};