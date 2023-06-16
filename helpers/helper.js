const User = require("../models/User")

exports.checkUser = async (email) => {
    const user = await User.find({ email })
    if (user.length) {
        return true
    } else {
        return false
    }
}