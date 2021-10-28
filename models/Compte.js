const mongoose = require('mongoose');;

const CompteSchema =  mongoose.Schema({
    firstname: String,
    LastName: String,
    EmailAddress:String,
    Gender :String




   

});


module.exports = mongoose.model('Compte', CompteSchema)
