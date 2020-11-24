const { use } = require("../../../../repo-node/controller/boilers");
const express = require ('express')
const app = express()

app.use('/api/technicians/', require('./technicians'));