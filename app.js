require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const databaseConfig = require('./config/database');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(databaseConfig.database, databaseConfig.options);

app.get('/', (req, res) => res.render('index'));

app.use('/skills', require('./routes/skills'));

app.listen(process.env.PORT, () => console.log('DBT Server Running'));
