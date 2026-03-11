const {Sequelize} = require('sequelize')

const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST

const sequelize = new Sequelize('sql8819644', 'sql8819644', 'FnJ3Gap12C', {
  host: 'sql8.freesqldatabase.com',
  dialect: 'mysql'
});


module.exports = sequelize