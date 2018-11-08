const router = require('express').Router()
const {Trip} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const trip = await Trip.findAll()
    res.json(trip)
  } catch (err) {
    next(err)
  }
})

router.get('/:tripId', async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id)
    res.json(trip)
  } catch (err) {
    next(err)
  }
})
