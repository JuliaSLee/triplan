const Sequelize = require('sequelize')
const db = require('../db')

const Trip = db.define('trip', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {notEmpty: true}
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {notEmpty: true}
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Trip
