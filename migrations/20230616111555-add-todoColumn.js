'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Todos',
      'description',
     {
       type: Sequelize.STRING,
       allowNull: false
     })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'Todos', 'description')
  }
};
