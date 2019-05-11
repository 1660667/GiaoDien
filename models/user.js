const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('User', {
  // Khai báo cột
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  UserName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;
