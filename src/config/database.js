const mongoose = require("mongoose");

const connect = async() => {
    await mongoose.connect("mongodb+srv://iamevans:horcrux@cluster0.rczoqnd.mongodb.net/twitter_Dev");
}

module.exports = connect;






