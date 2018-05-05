var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var customers = [
    {
        customerName: [],
        phoneNumber: [],
        email: [],
        customerid: []
    }
];