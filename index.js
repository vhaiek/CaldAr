require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./app/models');
const router = require('./app/routes');
console.log('hi');

// This help us to interpret body from request as a JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((e) => {
    console.log('Error connecting to DB', e);
    process.exit();
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`Server UP on localhost:${PORT}`);
});
