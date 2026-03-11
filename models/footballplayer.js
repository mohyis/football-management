const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const footballTeam = require('./footballteam');


class footballPlayer extends Model {}

footballPlayer.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      teamId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "footballTeam",
          key: "id"
        },
        onDelete: 'CASCADE'
      },
      
      playerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      position: {
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
    modelName: 'footballPlayer', // We need to choose the model name
  },
);
footballTeam.hasMany(footballPlayer, {foreignKey: 'teamId', as: 'player'})

footballPlayer.belongsTo(footballTeam, {
  foreignKey: 'teamId',
  as: 'team'
})

module.exports = footballPlayer