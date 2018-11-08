const Sequelize = require('sequelize')
const db = require('../db')

const TripPlace = db.define('tripplace', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {notEmpty: true}
  },
  hour: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {isNumeric: true, min: 0, max: 23}
  },
  minute: {
    type: Sequelize.ENUM,
    values: ['0', '30']
  }
})

module.exports = TripPlace
