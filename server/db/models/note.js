const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  contents: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {notEmpty: true}
  }
})

module.exports = Note
