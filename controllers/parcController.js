

const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Parc = mongoose.model('Parc');

router.get('/', (req, res) => {
    res.render("Parc/addOrEdit", {
        viewTitle: "Ajouter Parc"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var Parcs = new Parc();
    Parcs.nom= req.body.nom;
    Parcs.type= req.body.type;
    Parcs.capacite= req.body.capacite;
  

   
 

   
   
  
    Parcs.save((err, doc) => {
        if (!err)
            res.redirect('Parc/list');
        else {
            
            }
           
    });
}

function updateRecord(req, res) {
    Parc.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('Parc/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("Parc/addOrEdit", {
                    viewTitle: 'Parc/list',
                    Parc: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Parc.find((err, docs) => {
        if (!err) {
            res.render("Parc/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


   

router.get('/:id', (req, res) => {
    Parc.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("Parc/addOrEdit", {
                viewTitle: "Update parc",
                Parc: doc
            }); 
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Parc.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/Parc/list');
        }
        else { console.log('Error in parc delete :' + err); }
    });
});

//route


   


module.exports = router;
