const jwt=require('jsonwebtoken')
exports.auth=(req,res,next)=>{
    const auth_token=req.headers.authorization.split(' ')[1]
    if(!auth_token){
        res.status(401).json({message:"Unauthorized"})
    }else{
        next()
    }
}  