const express = require('express');
const app = express();

app.use('/api/buildings', require('./controller/buildings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`server started on port ${PORT}`))