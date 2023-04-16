const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.get('/', ProductController.fetchProducts)
router.post('/', ProductController.createProducts)
router.put('/:id', ProductController.updateProducts)
router.delete('/:id', ProductController.deleteProducts)

module.exports = router