const express = require('express')
const router = express.Router()
const PlatformController = require('../controllers/PlatformController')
const ProductController = require('../controllers/productController')

router.get('/products', ProductController.fetchProducts)
router.get('/platforms', PlatformController.fetchPlatforms)

module.exports = router