const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/boilers',require('./controllers/boilers'));
app.use('/api/buildings', require('./controllers/buildings'));
app.use('/api/technicians',require('./controllers/technicians.js'));
//app.use('/api/company',require('./controllers/company'));

app.listen(PORT, () => console.log('working OK'));