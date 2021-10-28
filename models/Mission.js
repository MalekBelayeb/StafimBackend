const Chauffeur = require('./Chauffeur');

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const MissionSchema  = mongoose.Schema({

     date: { type: Date, required: true },
     note: { type: String,default:''},
     etat: { type: String,default:''},
     chauffeur: {type: mongoose.Schema.Types.ObjectId, ref: 'Chauffeur' },
     voiture: {type: mongoose.Schema.Types.ObjectId, ref: 'Vehicule'}
     
    });
    

module.exports = mongoose.model('Mission', MissionSchema)