const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.render("users/addOrEdit", {
        viewTitle: "Insert Question"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
      
});


function insertRecord(req, res) {
    var users = new User();
    users.email= req.body.email;

    users.password= req.body.password;

    users.save((err, doc) => {
        if (!err)
            res.redirect('users/list');
        else {
            
            }
           
    });
    
}

router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.render("users/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
         if (!err) {
             res.render("users/addOrEdit", {
                 viewTitle: "Modifier Question",
                 employee: doc
             });
         }
     });
 });
router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/users/list');
        }
        else { console.log('Error in users delete :' + err); }
    });
});

module.exports = router;