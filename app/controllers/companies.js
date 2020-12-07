const db = require('../models');
const Company = db.companies;

const exp = {};

// Retrieve a single company by Id
exp.findOne = (req, res) => {
  Company.findOne({ id_company: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Company with id ${req.params.id} was not found`,
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `Some error ocurred while retrieving company with id ${req.params.id} `,
      });
    });
};

//  Retrieve all companies from the database
exp.findAll = (req, res) => {
  Company.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving companies.',
      });
    });
};

// Create a company

const companyKeys = [
  'building',
  'user',
  'id_company',
  'cuit',
  'email',
  'fiscal_address',
];

exp.create = (req, res) => {
  //Validate request
  const companyData = req.body;
  console.log(companyData);
  const missingKey = companyKeys.find((key) => !companyData[key]);
  if (missingKey) {
    res.status(400).send({ message: `Missing key ${missingKey}!` });
    return;
  }
  //Create a Company
  const constructionCompany = new Company({
    id_company: req.body.id_company,
    building: req.body.building,
    user: req.body.user,
    cuit: req.body.cuit,
    email: req.body.email,
    fiscal_address: req.body.fiscal_address,
  });

  //Save company in the dataBase
  constructionCompany
    .save(constructionCompany)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Company.',
      });
    });
};

// Update a company by Id

exp.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  //Validate request
  const companyData = req.body;
  //console.log(companyData);
  const missingKey = companyKeys.find((key) => !companyData[key]);
  if (missingKey) {
    res.status(400).send({ message: `Missing key ${missingKey}!` });
    return;
  }

  const id = req.params.id;

  Company.findOneAndUpdate({ id_company: id }, companyData, {
    useFindAndModify: false,
  })
    .then((data) => {
      console.log(data);
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`,
        });
      } else {
        res.send({ message: 'Company was updated succsessfully' });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: 'Error updating Company with id=' + id,
      });
    });
};

// Delete a company by Id
exp.delete = (req, res) => {
  const id = req.params.id;
  Company.findOneAndRemove({ id_company: id }, { useFindAndModify: false })
    .then((data) => res.send({ message: 'Company was removed successfully.' }))
    .catch(() => {
      res.status(500).send({
        message: 'Error removing Company with id=' + id,
      });
    });
};

module.exports = exp;
