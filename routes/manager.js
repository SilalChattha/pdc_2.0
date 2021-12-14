var express = require('express');
const router = express.Router();

const mysql = require("mysql2/promise");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: '3306',
    password: "Monarch_2479",
    database: "pdcdb",
});

module.exports= router;