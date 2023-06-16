const mongoose=require('mongoose')

const MONGO_URL=process.env.MONGO_URL

exports.connect=()=>{
    mongoose.connect(MONGO_URL).then((res)=>{
        console.log("databse connected successfully");
    }).catch((err)=>{
        console.log("databse not connected");
    })
}