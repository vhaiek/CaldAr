const db = require('../models');
const company = db.companies;

const exp = {};


exp.findOne = (req, res) => {
    company.findOne({id: req.params.id})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: `Company with id ${req.params.id} was not found`
                })
            }
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || `Some error ocurred while retrieving company with id ${req.params.id} `
            })
        })
}

//  Retrieve all companies from the database
exp.findAll = (req, res) => {
  company.find({})
    .then(data =>{
      res.send(data);
    })
    .catch(err =>{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving companies."
      });
    });
};

exp.create = (req, res) => {res.send("Method not implemented")}

exp.update = (req, res) => {res.send("Method not implemented")}

exp.delete = (req, res) => {res.send("Method not implemented")}

module.exports = exp;