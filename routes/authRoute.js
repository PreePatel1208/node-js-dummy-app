const express = require('express')
const { login } = require('../controller/authController')

const { loginValidator } = require('./../utils/validator')

const router = express.Router()

router.post('/', loginValidator, login)

module.exports = router
