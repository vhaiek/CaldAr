const db = require('../models');
const BoilerType = db.boilersType;

const exp = {};
exp.findAll = (req, res) => {
  BoilerType.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'some error occured while retrieving boilers type',
      });
    });
};
module.exports = exp;
