const router = require('express').Router()
const {Checklist} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const checklist = await Checklist.findAll()

    res.json(checklist)
  } catch (err) {
    next(err)
  }
})
