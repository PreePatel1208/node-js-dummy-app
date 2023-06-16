const express=require('express')

const router=express.Router()

const {register,update}=require('./../controller/UserController')

const {registerValidator}=require('./../utils/validator')

router.post('/',registerValidator,register)

router.post('/:id',registerValidator,update)

module.exports=router