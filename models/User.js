const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name is required"]
    },
    email:{
        type:String,
        require:[true,"name is required"]
    },
    paasword:{
        type:String,
        require:[true,"password is required"]
    },
    secret:{
        type:String,
        require:[true,"secret is required"]
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    updated_at:{
        type:Date,
        default:Date.now()
    },
    deleted_at:{
        type:Date,
        default:null
    }
})

const User=mongoose.model('user',Schema)

module.exports=User