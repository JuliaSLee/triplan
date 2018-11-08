const router = require('express').Router()
const {Trip, Place} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const tripplaces = await Place.findAll({
      include: [{model: Trip}]
    })
    res.json(tripplaces)
  } catch (err) {
    next(err)
  }
})
