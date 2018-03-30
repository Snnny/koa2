const router = require('koa-router')()

const users = require('./users')
const api = require('./api')

router.use('/user', users.routes(), users.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router

