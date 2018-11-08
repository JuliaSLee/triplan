const router = require('express').Router()
const {Budget} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const budget = await Budget.findAll()
    res.json(budget)
  } catch (err) {
    next(err)
  }
})
