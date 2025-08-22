'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('patients', 'createdAt', {
      type: Sequelize.DATE, // Or any other Sequelize.DataType
      allowNull: true, // Example: adjust other column properties as needed
      // defaultValue: new Date(), // Example: set a default value
    });

    await queryInterface.changeColumn('patients', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('patients', 'createdAt', {
      type: Sequelize.DATE, // Or any other Sequelize.DataType
      allowNull: false, // Example: adjust other column properties as needed
      // defaultValue: new Date(), // Example: set a default value
    });

    await queryInterface.changeColumn('patients', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
