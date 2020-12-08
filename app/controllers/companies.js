const db = require('../models');
const Company = db.companies;

const exp = {};

exp.findOne = (req, res) => {
  Company.findOne({ _id: req.params.id })
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

const companyKeys = [
  'building',
  'user',
  'id_company',
  'cuit',
  'email',
  'fiscal_address',
];

exp.create = (req, res) => {
  const companyData = req.body;
  console.log(companyData);
  const missingKey = companyKeys.find((key) => !companyData[key]);
  if (missingKey) {
    res.status(400).send({ message: `Missing key ${missingKey}!` });
    return;
  }
  const constructionCompany = new Company({
    _id: req.body._id,
    building: req.body.building,
    user: req.body.user,
    cuit: req.body.cuit,
    email: req.body.email,
    fiscal_address: req.body.fiscal_address,
  });

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

exp.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const companyData = req.body;
  const missingKey = companyKeys.find((key) => !companyData[key]);
  if (missingKey) {
    res.status(400).send({ message: `Missing key ${missingKey}!` });
    return;
  }

  const id = req.params.id;

  Company.findOneAndUpdate({ _id: id }, companyData, {
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

exp.delete = (req, res) => {
  const id = req.params.id;
  Company.findOneAndRemove({ _id: id }, { useFindAndModify: false })
    .then((data) => res.send({ message: 'Company was removed successfully.' }))
    .catch(() => {
      res.status(500).send({
        message: 'Error removing Company with id=' + id,
      });
    });
};

module.exports = exp;
