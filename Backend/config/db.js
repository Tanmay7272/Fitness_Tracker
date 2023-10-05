const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('user_data', 'root', 'MysqlRoot@123', {
    host:'localhost',
    port:'3306',
    dialect: 'mysql',
     // You can use 'postgres', 'sqlite', 'mssql', etc.
  });

  sequelize.authenticate()
  .then(()=>{
    console.log("connected to databse")
  })
  .catch(error=>{
    console.log(error)
  })

const db = {} 
db.Sequelize = Sequelize
db.sequelize = sequelize;

db.Meal = require('../models/mealModel')(sequelize,DataTypes)
db.User = require('../models/user')(sequelize,DataTypes)


db.sequelize.sync()
.then(()=>{
  console.log("Databse Synced successfully")
})  




module.exports = db;