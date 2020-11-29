const db = require('../models');
const Technician = db.technicians;

const exp = {};


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
// The remaining methods are axplained in the last class video from 1:20
exp.findAll = (req, res) => {res.send("Method not implemented")}

exp.create = (req, res) => {res.send("Method not implemented")}

exp.update = (req, res) => {res.send("Method not implemented")}

exp.delete = (req, res) => {res.send("Method not implemented")}

module.exports = exp;