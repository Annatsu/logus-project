/**
 * Node Modules
 */
const express = require("express");
const app = express();

/**
 * Project Custom Modules and Options
 */
const config = require("./config.json");

/**
 * Setting up Express
 */
app.use(express.static('public'));
app.set("view engine", "ejs");

/**
 * Basic routing on home
 */
app.get(['/', '/home'], (req, res) => {
    res.render('home.ejs');
});

/**
 * Require the posts module.
 */
const posts = require('./posts')(app);

/**
 * Starts listening at the port defined in config.json
 */
app.listen(config.port, () => {
    console.log("Server started.");
});
