const Sequelize = require('sequelize')
const db = require('../db')

const Budget = db.define('budget', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  amount: {
    type: Sequelize.INTEGER,
    validate: {isNumeric: true, min: 0}
  },
  actualAmount: {
    type: Sequelize.INTEGER,
    validate: {isNumeric: true, min: 0}
  }
})

module.exports = Budget
