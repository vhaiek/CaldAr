const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//app.use('/api/boilers',require('./controller/boilers'));
app.use('/api/buildings', require('./controller/buildings'));
app.use('/api/technicians',require('./controllers/technicians.js'));
//app.use('/api/company',require('./controller/company'));

app.listen(PORT, () => console.log('working OK'));