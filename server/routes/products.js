const express = require('express')
const ProductController = require('../controllers/productController')
const router = express.Router()


router.get('/', ProductController.fetchProducts)
router.post('/', ProductController.createProducts)
router.put('/:id', ProductController.updateProducts)
router.delete('/:id', ProductController.deleteProducts)

module.exports = router