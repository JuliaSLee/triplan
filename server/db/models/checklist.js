const Sequelize = require('sequelize')
const db = require('../db')

const Checklist = db.define('checklist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }
})

module.exports = Checklist
