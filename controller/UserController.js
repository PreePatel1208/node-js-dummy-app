const { createUser } = require('../services/user.services')

exports.register = async (req, res, next) => {
    const {message,statusCode,Type,data}=await createUser(req)
    res.status(statusCode).json({"message":message,"data":data}) 
}
exports.update=(req,res,next)=>{

}