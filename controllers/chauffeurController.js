
const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Chauffeur = mongoose.model('Chauffeur');
const Mission = mongoose.model('Mission');


router.get('/', (req, res) => {
    res.render("Chauffeur/addOrEdit", {
        viewTitle: "Ajouter Chauffeur"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '' || req.body._id == undefined)
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {

    var Chauffeurs = new Chauffeur();
    Chauffeurs.cin= req.body.cin;   
    Chauffeurs.nom= req.body.nom;
    Chauffeurs.prenom= req.body.prenom;
    Chauffeurs.phone= req.body.phone;
    Chauffeurs.email= req.body.email;
    Chauffeurs.address= req.body.address;

    Chauffeurs.save((err, doc) => {
        if (!err)
            res.redirect('Chauffeur/list');
        else {
            
            }
           
    });
}

function updateRecord(req, res) {
    Chauffeur.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('Chauffeur/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("Chauffeur/addOrEdit", {
                    viewTitle: 'Chauffeur/list',
                    Chauffeur: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Chauffeur.find((err, docs) => {
        if (!err) {
            res.render("Chauffeur/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


   

router.get('/:id', (req, res) => {
    Chauffeur.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("Chauffeur/addOrEdit", {
                viewTitle: "Update chauffeur",
                Chauffeur: doc
            }); 
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Chauffeur.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/Chauffeur/list');
        }
        else { console.log('Error in chauffeur delete :' + err); }
    });
});





module.exports = router;