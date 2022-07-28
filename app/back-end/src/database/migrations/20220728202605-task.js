'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('tasks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    task_name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    in_progress: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};