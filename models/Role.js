const mongoose=require('mongoose')


const Schema=new mongoose.Schema({
 user:{
    type:mongoose.Schema.Types.ObjectId,
    require:true
 },
 role_name:{
    type:String,
    enum:["ADMIN","USER","SELLER"],
    default:"USER"
 },
 role_permissions:{
    product_module:{
        view:{
            type:Boolean,
            default:true
        },
        edit:{
            type:Boolean,
            default:false
        },
        delete:{
            type:Boolean,
            default:false
        }
    },
    cart_module:{
        view:{
            type:Boolean,
            default:true
        },
        edit:{
            type:Boolean,
            default:false
        },
        delete:{
            type:Boolean,
            default:false
        }

    },
    whishlist_module:{
        view:{
            type:Boolean,
            default:true
        },
        edit:{
            type:Boolean,
            default:false
        },
        delete:{
            type:Boolean,
            default:false
        }

    },
    order_module:{
        view:{
            type:Boolean,
            default:true
        },
        edit:{
            type:Boolean,
            default:false
        },
        delete:{
            type:Boolean,
            default:false
        }

    }
 }
})

const RolePemission=mongoose.model('role_permission',Schema)