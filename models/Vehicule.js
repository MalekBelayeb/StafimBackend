const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Mission= require('../models/Mission');

const VehiculeSchema  = mongoose.Schema({

    matricule: { type: String, required: true },
    modele: { type: String, required: true },
    couleur: { type: String, required: true },
    date: { type: String , required: true },
    marque: { type: String, required: true },
    
    })
 


module.exports = mongoose.model('Vehicule', VehiculeSchema)