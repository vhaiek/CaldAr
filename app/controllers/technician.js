const db = require('../models');
const Technician = db.technicians;
const exp = {};

exp.findOne = (req, res) => {
  Technician.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`,
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `Some error ocurred while retrieving Technician with id ${req.params.id} `,
      });
    });
};

exp.findAll = (req, res) => {
  Technician.find()
    .then((data) => {
      if (data.length < 1) {
        return res.status(404).send({
          message: 'Technicians collection is empty',
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          'Some error ocurred while retrieving Technician collection',
      });
    });
};

exp.findByName = (req, res) => {
  Technician.find()
    .then((data) => {
      data = data.filter((tech) =>
        tech.fullname.search(req.params.name) !== -1 ? true : false
      );
      if (data.length < 1) {
        return res.status(404).send({
          message: 'There are no Technicians that satisfies this search',
        });
      }
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: e.message || 'Some error ocurred while retrieving Technician',
      });
    });
};

exp.create = (req, res) => {
  const tech = new Technician({
    rol: req.body.rol,
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    address: req.body.address,
    boiler: req.body.boiler,
    capabilities: req.body.capabilities,
    hour_rate: req.body.hour_rate,
    daily_capacity: req.body.daily_capacity,
  });

  const error = tech.validateSync();
  if (error != null) {
    return res.status(400).send({ message: error.message });
  }

  tech
    .save(tech)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `Some error ocurred while saving Technician with id ${req.params.id} `,
      });
    });
};

exp.update = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: 'Data can not be empty',
    });
  }

  Technician.findOne({ _id: req.params.id })
    .then((tech) => {
      if (!tech) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`,
        });
      }
      if (req.body.rol) tech.rol = req.body.rol;
      if (req.body.email) tech.email = req.body.email;
      if (req.body.fullname) tech.fullname = req.body.fullname;
      if (req.body.phone) tech.phone = req.body.phone;
      if (req.body.address) tech.address = req.body.address;
      if (req.body.boiler) tech.boiler = req.body.boiler;
      if (req.body.capabilities) tech.capabilities = req.body.capabilities;
      if (req.body.hour_rate) tech.hour_rate = req.body.hour_rate;
      if (req.body.daily_capacity)
        tech.daily_capacity = req.body.daily_capacity;

      const error = tech.validateSync();
      if (error != null) {
        return res.status(400).send({ message: error.message });
      }

      tech
        .save(tech)
        .then((data) => {
          res.send({ message: 'Updated successfully' });
        })
        .catch((e) => {
          res.status(500).send({
            message:
              e.message ||
              `Some error ocurred while updating Technician with id ${req.params.id} `,
          });
        });
    })
    .catch((e) => {
      res.status(500).send({
        message:
          e.message ||
          `Some error ocurred while retrieving Technician with id ${req.params.id} `,
      });
    });
};

exp.delete = (req, res) => {
  Technician.findOneAndRemove(
    { _id: req.params.id },
    { useFindAndModify: false },
    (e, item) => {
      if (e) {
        return res.status(500).send({
          message:
            e.message ||
            `Some error ocurred while removing Technician with id ${req.params.id} `,
        });
      }
      if (!item) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} don't exist.`,
        });
      }
      res.send({
        message: `Technician with id ${req.params.id} was removed successfully.`,
      });
    }
  );
};

module.exports = exp;
