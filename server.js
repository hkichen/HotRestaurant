var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// customer reservation & waitlist data
var reservations = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    }

];

var waitlist = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    },
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerId: ""
    }
];

// logic for button & passing input value to POST
$('#reserveBtn').on("click", function (event) {
    event.preventDefault();

    var newReservation = {
        customerName: $("#customerName").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim(),
        customerEmail: $("#customerEmail").val().trim(),
        customerId: $("#customerId").val().trim()
    };
})


// routes 
app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendfile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"));
});





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });