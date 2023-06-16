
const { check } = require('express-validator')

const registerValidator = [
    check('name').notEmpty().trim().withMessage("name is required"),
    check('email').notEmpty().trim().withMessage("email is required"),
    check('password').notEmpty().trim().withMessage("password is required")
]

const loginValidator=[
    check('email').notEmpty().isEmail().trim().withMessage("Please enter valid email"),
    check('password').notEmpty().trim().withMessage("password is required")
]

module.exports={
    registerValidator,
    loginValidator
}