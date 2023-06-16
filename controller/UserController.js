const User = require('./../models/User')
const { authenticator } = require('otplib')
const { validationResult}=require('express-validator')
const { createUser } = require('../services/user.services')

exports.register = async (req, res, next) => {
    
    const {message,statusCode,Type,data}=await createUser(req)
    console.log("message,statusCode,Type,data",message,statusCode,Type,data);
    res.status(statusCode).json({"data":data})
   
}
exports.update=(req,res,next)=>{

}