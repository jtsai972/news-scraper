//Express
const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path');
// var logger = require("morgan");

//Database
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server



var PORT = 3000;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Initialize Express
var app = express();

// Configure middleware
// directory references
const publicDir = path.join(__dirname, './public');

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use("/assets", express.static(publicDir));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes
require("./controllers/scraperController")(app);
require("./controllers/indexController")(app);
require("./controllers/articleController")(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!\nhttp://localhost:" + PORT);
});
