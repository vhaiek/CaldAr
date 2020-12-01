const db = require('../models');
const Buildings = db.buildings;

const exp = {};

//Find a single Building with an id 
exp.findOne = (req, res) => {
    Buildings.findOne({id: req.params.id})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: `Building with id ${req.params.id} was not found`
                })
            }
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while retrieving building with id ${req.params.id} `
            })
        })
}



//Created a new building
exp.create = (req,res) => {
    if (!req.body.fullName || !req.body.address || !req.body.phone || !req.body.boilers || !req.body.id){
       res.status(400).send({message:'Content can not be empty!!'});
       return;
    }
    const building = new Buildings({
        id:req.body.id,
        fullName: req.body.fullName,
        address:req.body.address,
        phone: req.body.phone,
        boilers: req.body.boliers,    
    });

 //Save Building in the databe
   building
   .save(building)
   .then(data =>{
       res.send(data);
   })
   .catch((e) => {
    res.status(500).send({
        message: e.message || `some error ocurrerd while creating building  ${req.params.id} `
    });
});
};

//Update Building

exp.update = (req, res) => {
    if (!req.body) {
        return res.status (400).sed({
            message: 'Data to update can not be empty'
        });
    }
    if (!req.body.fullName || !req.body.address || !req.body.phone || !req.body.boilers || !req.body.id){
        res.status(400).send({message:'Content can not be empty!!'});
        return;
     }

     const id= req.params.id;
    
     building.finOneAndUpdate({id},req.body,{ useFindAndModify: flase })
     .then(data =>{
         if (!data){
             res.status(400).send({
                 message:`Cannot update building with id= ${req.params.id} `
             });
         }else res.send({message: 'Building was update successfully'});
     })
     .catch((e) => {
        res.status(500).send({
            message: e.message || `some error ocurrerd while updating building  ${req.params.id} `
        });
     });
    
};

//Delete Building
exp.delete =(req,res) =>{
    const id = req.params.id;
    building.findOneAndRemove ({id},{useFindAndModify: false})
    .then (data =>
        res.send({ message:'Buildin was delete successfully'})
        )
    .catch((e) => {
            res.status(500).send({
                message: e.message || `some error ocurrerd while delete building  ${req.params.id} `
            });
        });
};



// The remaining methods are axplained in the last class video from 1:20
exp.findAll = (req, res) => {res.send("Method not implemented")}

exp.create = (req, res) => {res.send("Method not implemented")}

exp.update = (req, res) => {res.send("Method not implemented")}

exp.delete = (req, res) => {res.send("Method not implemented")}

module.exports = exp;