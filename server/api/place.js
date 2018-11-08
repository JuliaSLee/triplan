const router = require('express').Router()
const {Place} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const place = await Place.findAll()
    res.json(place)
  } catch (err) {
    next(err)
  }
})
