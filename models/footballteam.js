const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class FootballTeam extends Model {}

FootballTeam.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coachName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'FootballTeam', // We need to choose the model name
  },
);

module.exports = FootballTeam