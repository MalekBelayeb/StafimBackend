const mongoose = require('mongoose');
const Mission= require('../models/Mission');

const ChauffeurSchema  = mongoose.Schema({

    cin: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    password: { type: String, required: true } ,
    phone: { type: String },
    email: { type: String },
    address: { type: String } ,
    isVerified: { type: Number, default:0 } ,
    isActive: { type: Number, default:1 } ,

   })
   
//const Chauffeur = await missions.findOne({ date: '' }).populate('Mission');

//Chauffeur .missions;
//module.exports = {'Chauffeur': require('./Chauffeur'),'Mission': require('./ission'),};

module.exports = mongoose.model('Chauffeur',ChauffeurSchema)