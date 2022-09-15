const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Current-Root-Password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
