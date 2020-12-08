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

exp.create = (req, res) => {
  const constructionCompany = new Company({
    building: req.body.building,
    user: req.body.user,
    cuit: req.body.cuit,
    email: req.body.email,
    fiscal_address: req.body.fiscal_address,
  });

  const error = constructionCompany.validateSync();
  if (error != null) {
    return res.status(400).send({ message: error.message });
  }

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
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Company.findOne({ _id: id })
    .then((company) => {
      if (!company) {
        return res.status(404).send({
          message: `Cannot update Company with id=${id}. Maybe Company was not found!`,
        });
      }
      if (req.body.building) company.building = req.body.building;
      if (req.body.user) company.user = req.body.user;
      if (req.body.cuit) company.cuit = req.body.cuit;
      if (req.body.email) company.email = req.body.email;
      if (req.body.fiscal_address)
        company.fiscal_address = req.body.fiscal_address;

      const error = company.validateSync();
      if (error != null) {
        return res.status(400).send({ message: error.message });
      }

      company
        .save(company)
        .then((data) => {
          res.send({ message: 'Company was updated succsessfully' });
        })
        .catch((e) => {
          res.status(500).send({
            message: 'Error updating Company with id=' + id,
          });
        });
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
