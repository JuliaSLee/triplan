const User = require('./user')
const Budget = require('./budget')
const Checklist = require('./checklist')
const Note = require('./note')
const Place = require('./place')
const Trip = require('./trip')
const TripPlace = require('./tripplace')

User.hasMany(Trip)
Trip.belongsTo(User)

Trip.belongsToMany(Place, {through: TripPlace})
Place.belongsToMany(Trip, {through: TripPlace})

Trip.hasMany(Budget)
Budget.belongsTo(Trip)

Trip.hasMany(Note)
Note.belongsTo(Trip)

Trip.hasMany(Checklist)
Checklist.belongsTo(Trip)

module.exports = {
  User,
  Budget,
  Checklist,
  Note,
  Place,
  Trip,
  TripPlace
}
