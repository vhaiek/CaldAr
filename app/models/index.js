const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://eloy1234:eloy1234@caldar.fd9wx.mongodb.net/CaldAr?retryWrites=true&w=majority';

db.boilers = require('./boilers.js')(mongoose);
//db.technicians = require('./technicians.js')(mongoose);
//db.buildings = require('./buildings.js')(mongoose);
db.companies = require('./companies.js')(mongoose);

module.exports = db;