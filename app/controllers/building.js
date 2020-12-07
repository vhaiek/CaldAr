const db = require('../models');
const Building = db.buildings;

const exp = {};

// find all buildins
exp.findAll = (req, res) => {
  Building.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: e.message || 'Some error ocurred while find all building ',
      });
    });
};

// Find a single Building with an id
exp.findOne = (req, res) => {
  Building.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Building with id ${req.params.id} was not found',
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          'Some error ocurred while retrieving building with id ${req.params.id} ',
      });
    });
};

// Created a new building
exp.create = (req, res) => {
  if (
    !req.body.fullName ||
    !req.body.address ||
    !req.body.phone ||
    !req.body.boilers ||
    !req.body.id
  ) {
    res.status(400).send({ message: 'Content can not be empty!!' });
    return;
  }
  const building = new Building({
    id: req.body.id,
    fullName: req.body.fullName,
    address: req.body.address,
    phone: req.body.phone,
    boilers: req.body.boliers,
  });

  // Save Building in the databe
  building
    .save(building)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          'some error ocurrerd while creating building  ${req.params.id} ',
      });
    });
};

// Update Building

exp.update = (req, res) => {
  if (!req.body) {
    return res.status(400).sed({
      message: 'Data to update can not be empty',
    });
  }
  if (
    !req.body.fullName ||
    !req.body.address ||
    !req.body.phone ||
    !req.body.boilers ||
    !req.body.id
  ) {
    res.status(400).send({ message: 'Content can not be empty!!' });
    return;
  }

  const id = req.params.id;

  Building.finOneAndUpdate({ id }, req.body, { useFindAndModify: flase })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Cannot update building with id= ${req.params.id} `,
        });
      } else res.send({ message: 'Building was update successfully' });
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `some error ocurrerd while updating building  ${req.params.id} `,
      });
    });
};

// Delete Building
exp.delete = (req, res) => {
  const id = req.params.id;
  Building.findOneAndRemove({ id }, { useFindAndModify: false })
    .then((data) => res.send({ message: 'Buildin was delete successfully' }))
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `some error ocurrerd while delete building  ${req.params.id} `,
      });
    });
};

module.exports = exp;
