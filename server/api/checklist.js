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

router.post('/', async (req, res, next) => {
  try {
    const {name} = req.body
    const checklist = await Checklist.create({name})
    res.json(checklist)
  } catch (err) {
    next(err)
  }
})

router.delete('/:listItemId', async (req, res, next) => {
  try {
    console.log('---->req', req)
    await Checklist.destroy({
      where: {id: req.params.listItemId}
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
