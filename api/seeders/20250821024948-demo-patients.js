'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Patients', [
      {
        name: 'Juan Perez',
        age: 40,
        symptoms: 'fiebre, fatiga, tos, dolores muscular',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mateo Hernandez',
        age: 25,
        symptoms: 'fiebre, fatiga, tos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fracisco Estrada',
        age: 36,
        symptoms: 'fiebre, dolores muscular',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alberto Sanchez',
        age: 22,
        symptoms: 'fiebre, dolores muscular, diarrea',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'María Escalante',
        age: 20,
        symptoms: 'fiebre, dolores muscular, diarrea',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Paola Duarte',
        age: 40,
        symptoms: 'fiebre, diarrea',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Patients', null, {});
  }
};
