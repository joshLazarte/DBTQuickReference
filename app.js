require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const databaseConfig = require('./config/database');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/skills/')
]);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(databaseConfig.database, databaseConfig.options);

app.get('/', (req, res) => res.render('index'));

app.use('/skills', require('./routes/skills'));

app.listen(process.env.PORT, () => console.log('DBT Server Running'));
