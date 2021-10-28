const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Compte = mongoose.model('Compte');

router.get('/', (req, res) => {
    res.render("Compte/addOrEdit", {
        viewTitle: "Insert compte"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
      
});


function insertRecord(req, res) {
    var  Compte = new User();
    Compte.firstname= req.body.firstname;
    Compte.LastName= req.body.LastName;
    Compte.EmailAddress= req.body.EmailAddress;

    Compte. Gender= req.body. Gender;

   
    Compte.save((err, doc) => {
        if (!err)
            res.redirect('Compte/list');
        else {
            
            }
           
    });
}



router.get('/addOrEdit', (req, res) => {
    Compte.find((err, docs) => {
        if (!err) {
            res.render("Compte/addOrEdit", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});
router.get('/:id', (req, res) => {
    Compte.findById(req.params.id, (err, doc) => {
         if (!err) {
             res.render("Compte/addOrEdit", {
                 viewTitle: "Modifier compte",
                 employee: doc
             });
         }
     });
 });
router.get('/delete/:id', (req, res) => {
    Compte.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/Compte/list');
        }
        else { console.log('Error in users delete :' + err); }
    });
});

module.exports = router;