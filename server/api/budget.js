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

router.put('/:budgetId', async (req, res, next) => {
  try {
    const budget = await Budget.findById(req.params.budgetId)
    const updatedBudget = await budget.update({
      actualAmount: req.body.actualAmount
    })
    res.status(204).json(updatedBudget)
  } catch (err) {
    next(err)
  }
})

router.delete('/:budgetId', async (req, res, next) => {
  try {
    const id = req.params.budgetId
    await Budget.destroy({where: {id}})
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const budget = await Budget.create(req.body)
    console.log('whats budget', budget)
    res.json(budget)
  } catch (err) {
    next(err)
  }
})
