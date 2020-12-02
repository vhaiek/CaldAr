const db = require('../models');
const Technician = db.technicians;

const exp = {};

// Bring a technician document
exp.findOne = (req, res) => {
    Technician.findOne({id: req.params.id})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: `Technician with id ${req.params.id} was not found`
                })
            }
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while retrieving Technician with id ${req.params.id} `
            })
        })
}
// Bring the whole collection
exp.findAll = (req, res) => {
    Technician.find()
    .then(data => {
        if(data.length < 1) {
            return res.status(404).send({
                message: `Technicians collection is empty`
            })
        }
        res.send(data);
    })
    .catch((e) => {
        res.status(500).send({
            message: e.message || `Some error ocurred while retrieving Technician collection`
        })
    })
}
// Bring the whole collection
exp.findByName = (req, res) => {
    Technician.find()
    .then(data => {
        data = data.filter(tech => (tech.fullname.search(req.params.name) !== -1)? true:false);
        if(data.length < 1) {
            return res.status(404).send({
                message: `There are no Technicians that satisfies this search`
            })
        }
        res.send(data);
    })
    .catch((e) => {
        res.status(500).send({
            message: e.message || `Some error ocurred while retrieving Technician`
        })
    })
}
// Create a new Technician document
exp.create = (req, res) => {
    // It's validated by the model too
    if(!req.body.id || !req.body.fullname){
        return res.status(400).send({ message: "ID and name fields are required"})
    }

    // Create technician
    const tech = new Technician({
        id: req.body.id,
        rol: req.body.rol,
        email: req.body.email,
        fullname: req.body.fullname,
        phone: req.body.phone,
        address: req.body.address,
        boiler: req.body.boiler,
        capabilities: req.body.capabilities,
        hour_rate: req.body.hourRate,
        daily_capacity: req.body.dailyCapacity
      
    });

    // Save
    tech.save(tech)
        .then( (data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while saving Technician with id ${req.params.id} `
            });
        })
}
// Update technician data
exp.update = (req, res) => {
    // Validate against empty body
    if(Object.keys(req.body).length === 0){
        return res.status(400).send({
            message: "Data can't be empty"
        })
    }
    Technician.findOneAndUpdate({id: req.params.id}, req.body, { useFindAndModify: false})
        .then((data) => {
            if(!data) {
                return res.status(404).send({
                    message: `Can't update Technician with id: ${req.params.id}`
                })
            }
            res.send({ message: "Updated succesfully" });
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while updating Technician with id ${req.params.id} `
            })
        })
}
// Remove by id
exp.delete = (req, res) => {

    Technician.findOneAndRemove({id:req.params.id}, { useFindAndModify: false }, (e, item) => {
        if (e) {
            return res.status(500).send({
                message: e.message || `Some error ocurred while removing Technician with id ${req.params.id} `
            })
        }       
        if (!item) {
            return res.status(404).send({message: `Technician with id ${req.params.id} don't exist.`});
        }  
        res.send({ message: `Technician with id ${req.params.id} was removed succesfully.`});
    });
}

module.exports = exp;