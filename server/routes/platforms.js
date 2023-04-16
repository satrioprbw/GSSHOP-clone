const express = require('express')
const router = express.Router()
const PlatformController = require('../controllers/PlatformController')

router.get('/', PlatformController.fetchPlatforms)
router.post('/', PlatformController.createPlatforms)
router.put('/:id', PlatformController.updatePlatforms)
router.delete('/:id', PlatformController.deletePlatforms)

module.exports = router