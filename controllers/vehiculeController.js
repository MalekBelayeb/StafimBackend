const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Chauffeur = require('../models/Chauffeur');
const Vehicule = mongoose.model('Vehicule');

const Mission = require('../models/Mission');

router.get('/', (req, res) => {
    res.render("Vehicule/addOrEdit", {
        viewTitle: "Ajouter Vehicule"
    });
});
router.get('/', (req, res) => {
    res.render("Vehicule/calander", {
        viewTitle: "Ajouter Vehicule"
    });
});

router.post('/', (req, res) => {

    if (req.body._id == '' || req.body._id == undefined)
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    
    var Vehicules = new Vehicule();
    Vehicules.matricule= req.body.matricule;
    Vehicules.couleur= req.body.couleur;
    Vehicules.modele= req.body.modele;
    Vehicules.date= req.body.date;
    Vehicules.marque= req.body.marque;
    console.log(Vehicules)

    Vehicules.save((err, doc) => {
        if (!err)
            res.redirect('Vehicule/list');
        else {
            console.status(400).log(err)
            }
           
    });
}

function updateRecord(req, res) {
    Vehicule.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('Vehicule/list'); }
        else {

            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("Vehicule/addOrEdit", {
                    viewTitle: 'Update  Vehicule ',
                    Vehicule: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Vehicule.find((err, docs) => {
        if (!err) {
            res.render("Vehicule/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving veculelist :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Vehicule.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("Vehicule/addOrEdit", {
                viewTitle: "Update vehicule",
                Vehicule
                
                : doc
            });
        }
    });
});

router.get('/:id', (req, res) => {
    Vehicule.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("Vehicule/calander", {
                viewTitle: "Update vehicule",
                Vehicule               
                : doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Vehicule.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/Vehicule/list');
        }
        else { console.log('Error in vehicule delete :' + err); }
    });
});


module.exports = router;