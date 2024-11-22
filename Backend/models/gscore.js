'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GScore extends Model {
    static associate(models) {

    }
  }

  GScore.init({
    registration_no: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true, // Số báo danh là khóa chính
    },
    math: {
      type: DataTypes.FLOAT,
      allowNull: true, // Cho phép null nếu không có điểm
    },
    literature: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    foreign_language: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    physics: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    chemistry: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    biology: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    history: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    geography: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    civic_education: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    language_id: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'GScore',
    tableName: 'g_scores',
    timestamps: false,
  });

  return GScore;
};
