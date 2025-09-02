'use strict';
const { Model, QueryTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      // define association here
    }

    static async getAllPatients() {
      return await sequelize.query('SELECT * FROM patients ORDER BY id DESC', { type: QueryTypes.SELECT });
    }

    static async registerPatient({ name, age, symptoms }) {
      return await sequelize.query(
        'INSERT INTO patients (name, age, symptoms) VALUES (:name, :age, :symptoms)',
        {
          replacements: { name, age, symptoms },
          type: QueryTypes.INSERT
        }
      );
    }

    static async updatePatient({ name, age, symptoms }, id) {
      return await sequelize.query(
        'UPDATE patients SET name = :name, age = :age, symptoms = :symptoms WHERE id = :id',
        {
          replacements: { name, age, symptoms, id },
          type: QueryTypes.UPDATE
        }
      );
    }

    static async deletePatient(id) {
      return await sequelize.query('DELETE FROM patients WHERE id = :id', {
        replacements: { id },
        type: QueryTypes.DELETE
      });
    }

    static async searchPatients(param) {
      return await sequelize.query(
        'SELECT * FROM patients WHERE name LIKE :search_parameter',
        {
          replacements: { search_parameter: `${param}%` },
          type: QueryTypes.SELECT
        }
      );
    }

    static async countPatients() {
      return await sequelize.query('SELECT COUNT(*) as total FROM patients', {
        type: QueryTypes.SELECT
      });
    }
  }

  Patient.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      symptoms: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Patient'
    }
  );
  return Patient;
};
