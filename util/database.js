const Sequelize = require('sequelize');// importing sequelize

//providing database, username and password
const sequelize = new Sequelize('node-complete', 'root', 'Current-Root-Password', { 
  dialect: 'mysql', //to be clear that we are connecting to msql database
  host: 'localhost'
}); //conneting to database

module.exports = sequelize; //export sequelize
