const express = require('express');
const router = express.Router();
const userCtrl = require('../Controllers/userController')

router.get('/', userCtrl.index)

module.exports = router