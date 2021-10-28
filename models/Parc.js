const mongoose = require('mongoose');

const ParcSchema = mongoose.Schema({

    nom: { type: String, required: true },
    type: { type: String, required: true },
    capacite: { type: String, required: true },

})

module.exports = mongoose.model('Parc', ParcSchema)