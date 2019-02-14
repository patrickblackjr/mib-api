const express = require('express');
const db = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

// Where to connect when possible
// probably use .env
db.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Connected to database.`);
// });
// global.db = db;

app.use(bodyParser.urlencoded({
  extended: true
}));

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log(`API is up @ port ${port}`);
});

