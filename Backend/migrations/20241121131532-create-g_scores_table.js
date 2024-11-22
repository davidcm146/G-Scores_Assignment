'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('g_scores', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      registration_no: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      math: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      literature: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      foreign_language: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      physics: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      chemistry: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      biology: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      history: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      geography: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      civic_education: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      language_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('g_scores');
  },
};
