const mongoose = require('mongoose'), Schema = mongoose.Schema;


const UserSchema =  mongoose.Schema({
    email: String,
    password: String
});


module.exports = mongoose.model('User', UserSchema)