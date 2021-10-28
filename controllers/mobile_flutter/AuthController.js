const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Chauffeur = require('../../models/Chauffeur');

const signInChauffeur = async (req,res)=>{

    cin = req.body.cin
    password = req.body.password

    Chauffeur.find({"cin":cin},async (err, doc) => {
        if(err)
        {
            
            console.log(err)
            res.status(400).end()

        }else{

            if(doc.length != 0)
            {
                const match = await bcrypt.compare(password, doc[0].password);
                if(match)
                {
                    if(doc[0].isVerified =='0')
                    {
                        res.status(402).send("Account not verified yet") 
    
                    }else if(doc[0].isActive =='0')
                    {
                        res.status(403).send("Account is disabled") 
     
                    }else{
                        console.log(doc[0])                      
                        res.status(200).json(doc) 
     
                    }
    
                }else{
    
                    res.status(404).send("Wrong password") 
    
                }

            }else{

                res.status(404).send("cin invalid") 

            }
            
          
        }
        
    });


}


const signUpChauffeur = async (req,res)=>{

    var chauffeur = new Chauffeur();

    chauffeur.password = await bcrypt.hash(req.body.password, 10)
    chauffeur.cin = req.body.cin
    chauffeur.nom = req.body.nom
    chauffeur.prenom = req.body.prenom

    Chauffeur.find({"cin":req.body.cin},async (err, doc) => {
        if(err)
        {
        
            console.log(err)
            res.status(400).end()

        }else{
            if (doc.length==0)
            {
                chauffeur.save((err, doc) => {
                    if (!err)
                    {
                        res.status(200).end()
            
                    }else{
                    
                        console.log(err)
                        res.status(400).end()
                    }
                        
                });

            }else{
                //cin exist
                res.status(401).end()

            }
            
        }
    })

    

}


const UpdateChauffeur = (req,res)=>{

    let idchauffeur = req.body.idchauffeur
    let nom = req.body.nom
    let prenom = req.body.prenom

    Chauffeur.findOneAndUpdate({_id:idchauffeur},{nom,prenom},function(err,result){
        
        if(err)
        {
            console.log(err)
            res.status(400).end()
        }else{
            res.status(200).end()   
        }
    
    })


}



const deleteAccountChauffeur = (req,res)=>{

    let idchauffeur = req.body.idchauffeur
    let isActive = 0
    Chauffeur.findOneAndUpdate({_id:idchauffeur},{isActive},function(err,result){
        
        if(err)
        {
            console.log(err)
            res.status(400).end()
        }else{
            res.status(200).end()   
        }
    
    })


}

module.exports = {

    signInChauffeur,signUpChauffeur,UpdateChauffeur,deleteAccountChauffeur
  
}