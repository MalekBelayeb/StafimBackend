const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
//const Chauffeur = mongoose.model('Chauffeur');
const Chauffeur = require('../models/Chauffeur.js');
const Mission= mongoose.model('Mission');
const Vehicule = mongoose.model('Vehicule');

var Misssion =require ('../models/Mission.js');

//get mission by id vehicule
//module.exports.getMissionByvehiculeId =(id ,callback)=> {
  //  Misssion.find.populate(Vehicule)
/*const missionController = {

    getMissionByvehiculeId: async(req, res) =>{
        try 
         const mission = await Mission.find().populate('Vehicule')  // il donne tt les atribus de shema a partir mel pbject id 
            res.json(mission)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

// }*/
    

router.get('/', (req, res) => {
    res.render("mission/addOrEdit", {
        viewTitle: "Insert mission"
       
    });
});

router.post('/', (req, res) => {


    if (req.body._id == '' || req.body._id == undefined)
        insertRecord(req, res);
        else
        updateRecord(req, res);
       

});


function insertRecord(req, res) {
     
    var Missions = new Mission();

    Missions.date= req.body.date;
    Missions.chauffeur= req.body.chauffeur;
    Missions.voiture = req.body.voiture
 

    Missions.save((err, doc) => {
        if (!err)
        {
          res.redirect('mission/list');
        }else{
        
            console.log(err)
            res.status(400).end()
        }
            
    });
}

function updateRecord(req, res) {
    Mission.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('mission/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render(" mission/addOrEdit", {
                    viewTitle: 'mission/list',
                    Mission: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}

//flutter
router.get('/list/missions.json', (req, res) => {
    Mission.find((err, docs) => {
      res.json(docs)
  }).populate('cin');
    
});


//node
router.get('/list', (req, res) => {
    Mission.find((err, docs) => {
        if (!err) {
            res.render("mission/list", {
                list: docs
            });
            
        }
        else {
            console.log('Error in retrieving mission list :' + err);
        }
    }).populate('cin');
});

router.get('/addOrEdit', (req, res) => {
    Mission.find((err, docs) => {
        if (!err) {
            res.render("mission/addOrEdit", {
                addOrEdit: docs
            });
            
        }
        else {
            console.log('Error in retrieving mission list :' + err);
        }
    }).populate('cin');
});

router.get('/:id', (req, res) => {
    Mission.find((err, docs) => {
        if (!err) {
            res.render("mission/addOrEdit", {
                addOrEdit: docs
            });
            
        }
        else {
            console.log('Error in retrieving mission list :' + err);
        }
    }).populate('cin');
    Mission.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("mission/addOrEdit", {
                viewTitle: "Update mission",
                Mission: doc
            }); 
        }
    });
});
router.get('/delete/:id', (req, res) => {
    Mission.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/mission/list');
        }
        else { console.log('Error in Missiondelete :' + err); }
    });
});


module.exports = router;