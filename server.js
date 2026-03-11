const express = require('express');
require('dotenv').config();
const app = express();
 const PORT = 8957
 const sequelize = require('./database/database')
 const teamRouter = require('./router/teamRouter');
 const playerRouter = require('./router/playerRouter')


 app.use(express.json())
 app.use(teamRouter)
 app.use(playerRouter)

 const database = async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}
 }
database()


 app.listen(PORT, ()=>{
    console.log('server is running on PORT: ', PORT)
 })