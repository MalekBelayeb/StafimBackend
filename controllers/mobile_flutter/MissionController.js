const mongoose = require('mongoose');
const Mission= mongoose.model('Mission');

const updateMission = (req,res)=>{
    
    let idmission = req.body.idmission
    let note = req.body.note
    let etat = req.body.etat

    Mission.findOneAndUpdate({_id:idmission},{note,etat},function(err,result){
        
        if(err)
        {
            console.log(err)
            res.status(400).end()
        }else{
            res.status(200).end()   
        }
    
    })

}

const getAllMissionsByChauffeur = (req,res)=>{

    let chauffeurId = req.body.chauffeurId
    console.log(chauffeurId)

    Mission.find({"chauffeur":chauffeurId}).populate({path:'voiture'}).exec(function (err, missions) {
        if(err)
        {
            console.log(err)
            res.status(400).end()
        }else{
            console.log(missions)
            res.status(200).json(missions)

        }
        
    });

}

  
module.exports = {

    updateMission,getAllMissionsByChauffeur
  
}