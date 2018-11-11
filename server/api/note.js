const router = require('express').Router()
const {Note} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const note = await Note.findAll()
    res.json(note)
  } catch (err) {
    next(err)
  }
})
