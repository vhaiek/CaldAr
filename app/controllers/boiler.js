const db = require('../models');
const Boiler = db.boilers;

const exp = {};

exp.create = (req, res) => {
  if (
    !req.body.description ||
    !req.body.type ||
    !req.body.maintenance_rate ||
    !req.body.hour_maintenance_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const boiler = new Boiler({
    description: req.body.description,
    type: req.body.type,
    maintenance_rate: req.body.maintenance_rate,
    hour_maintenance_cost: req.body.hour_maintenance_cost,
    hour_eventual_cost: req.body.hour_eventual_cost,
  });

  boiler
    .save(boiler)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating a boiler document',
      });
    });
};

exp.findOne = (req, res) => {
  Boiler.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.id} was not found`,
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `Some error ocurred while retrieving boiler with id ${req.params.id} `,
      });
    });
};

exp.findAll = (req, res) => {
  Boiler.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred',
      });
    });
};

exp.delete = (req, res) => {
  const id = req.params.id;
  Boiler.findOneAndRemove({ _id: id }, { useFindAndModify: false })
    .then((data) => res.send({ message: 'Boiler was removed successfully.' }))
    .catch((err) => {
      res.status(500).send({
        message: 'Error removing boiler with=' + id,
      });
    });
};

exp.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty',
    });
  }
  if (
    !req.body.description ||
    !req.body.type ||
    !req.body.maintenance_rate ||
    !req.body.hour_maintenance_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const id = req.params.id;

  Boiler.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            'Cannot update Boiler with id=' +
            id +
            '. Maybe boiler was not found!',
        });
      } else res.send({ message: 'Boiler was update successfylly.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Boiler with id=' + id,
      });
    });
};

module.exports = exp;
