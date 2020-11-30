const db = require('../models');
const Boiler = db.boilers;

const exp = {};


exp.findOne = (req, res) => {
    Boiler.findOne({id: req.params.id})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: `Boiler with id ${req.params.id} was not found`
                })
            }
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while retrieving boiler with id ${req.params.id} `
            })
        })
}
// Send all the boilers from the DB
exp.findAll = (req, res) => {
    Boiler.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
}






exp.create = (req, res) => {res.send("Method not implemented")}

exp.update = (req, res) => {res.send("Method not implemented")}

exp.delete = (req, res) => {res.send("Method not implemented")}

module.exports = exp;