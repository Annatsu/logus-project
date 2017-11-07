/**
 * Node Modules
 */
const express = require("express");
const app = express();

/**
 * Setting up Express
 */
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));

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
 * Starts listening at the port
 */
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
