const { validationResult } = require("express-validator");
const { checkUser } = require("../helpers/helper");

exports.login = async (req, res, next) => {
    const errors = validationResult(req);
    console.log("errors", errors);

    if(!errors?.errors?.length){

        const isUser= await checkUser(req.email)
        if(!isUser){
            res.status(403).json({message:"User is already exits"})
        }else{
            res.status(403).json({message:"Login Successfully"})  
        }

    }else{
        res.status(403).json({errors:errors.errors})
    }
}