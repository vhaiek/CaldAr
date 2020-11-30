const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://eloy1234:eloy1234@caldar.fd9wx.mongodb.net/CaldAr?retryWrites=true&w=majority';

// Add a new line for each remaining schema (first create it in https://cloud.mongodb.com/)
// Login --> collections
// Press (+) near CaldAr database name
// choose name and press Create.
//db.boilers = require('./boilers.js')(mongoose);
//db.technicisns = require('./technicians.js')(mongoose);
db.buildings = require('./buildings.js')(mongoose);

module.exports = db;