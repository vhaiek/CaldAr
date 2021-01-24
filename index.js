require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./app/models');
const router = require('./app/routes');

app.use(bodyParser.json());
// acts as a middleware
// to handle CORS Errors
app.use((req, res, next) => {
  // doesn't send response just adjusts it
  res.header('Access-Control-Allow-Origin', '*'); //* to give access to any origin
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, token, Authorization' // to give access to all the headers provided
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); // to give access to all the methods provided
    return res.status(200).json({});
  }
  next(); // so that other routes can take over
});
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
