const express = require('express')
const router = express.Router()
const pub = require('./pub')
const products = require('./products')
const platforms = require('./platforms')

const AuthController = require('../controllers/authController')
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use('/pub', pub)

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.use(authentication)

router.use('/products', products)
router.use('/platforms', platforms)

module.exports = router