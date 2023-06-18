const User = require("../models/User")

const jwt=require('jsonwebtoken')

exports.checkUser = async (email) => {
    const user = await User.find({ email })
    console.log("user",user);
    const secret_key = process.env.JWT_SECRET
    const token = jwt.sign({ user: user }, secret_key);
    if (user.length) {
        return {
            statusCode: 200,
            type: "Success",
            data: {
                user: user,
                token: token
            },
            messsage:"Login successfully !!!"
        }
    } else {
        return {
            statusCode: 400,
            type: "Error",
            data: [],
            messsage:"User not found"
        }
    }
}