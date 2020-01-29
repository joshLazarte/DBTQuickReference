require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const databaseConfig = require("./config/database");

mongoose.connect(databaseConfig.database, databaseConfig.options);

app.get('/', (req, res) => {
    res.send('DBT HOMEPAGE');
});

app.listen(process.env.PORT, () => console.log('DBT Server Running'));
