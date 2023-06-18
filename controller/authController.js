const { validationResult } = require("express-validator");
const { checkUser } = require("../helpers/helper");
const jwt=require('jsonwebtoken')

exports.login = async (req, res, next) => {
    const errors = validationResult(req);
    console.log("req.email",req.email);
    const {email,password}=req.body
    if(!errors?.errors?.length){
        const {statusCode,messsage,data,type}= await checkUser(email)
     res.status(statusCode).json({messsage,data:data})

    }else{
        res.status(403).json({errors:errors.errors})
    }
}