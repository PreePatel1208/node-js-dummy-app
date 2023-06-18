const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.createUser = async (req) => {
    const result = validationResult(req)

    if (!result.errors.length) {
        const { name, email, password } = req.body
        const user = await User.find({ email });
        console.log("user",user);
        if (user.length) {
            return {
                message: "Email is already exits!!",
                statusCode: 403,
                Type: "Error",
                data: user
            }
        }
        User.create({
            name, email, password
        }).then((response) => {
            return {
                message: "Register Successfully!!",
                statusCode: 200,
                Type: "SUCCESS",
                data: response
            }
        }).catch((err) => {
            console.log("smething went wrong", err);
        })
    } else {
        return {
            message: "Register Successfully!!",
            statusCode: 500,
            Type: "Error",
            data: result
        }
    }
}