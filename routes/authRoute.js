const express = require('express')
const { login } = require('../controller/authController')

const { loginValidator } = require('./../utils/validator')
const { auth } = require('../utils/middleware/auth')

const router = express.Router()

router.post('/', loginValidator, login)

router.get('/', auth, (req,res,next)=>{
res.status(200).send("done")
})

module.exports = router
