const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController')
const checkAdminStatus = require('../middlewares/checkAdminStatus')

// GET: '/';
router.get('/', mainController.index)
router.get('/services', mainController.index)
router.get('/services/design', mainController.index)
router.get('/admin?:user', checkAdminStatus, mainController.adminAcess)

module.exports = router;