const Sequelize = require('sequelize')
const db = require('../db')

const TripPlace = db.define('tripplace', {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {notEmpty: true}
  }
})

module.exports = TripPlace
