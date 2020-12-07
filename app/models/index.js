const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@caldar.fd9wx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

db.boilers = require('./boilers.js')(mongoose);
db.technicians = require('./technicians.js')(mongoose);
db.buildings = require('./buildings.js')(mongoose);
db.companies = require('./companies.js')(mongoose);

module.exports = db;
