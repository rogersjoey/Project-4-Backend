'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserStocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      stockId: {
        type: Sequelize.INTEGER
      },
      initialVlaue: {
        type: Sequelize.DECIMAL
      },
      finalValue: {
        type: Sequelize.DECIMAL
      },
      amountInvested: {
        type: Sequelize.DECIMAL
      },
      growth: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserStocks');
  }
};