const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/checklist', require('./checklist'))
router.use('/place', require('./place'))
router.use('/budget', require('./budget'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
