const express = require("express");
const app = express();
require("dotenv").config(); // get access to environmental variables from .env
const port = process.env.PORT; // PORT is from the .env

require("./config/mongoose.config"); // mongoose.config has no export, so the whole file runs immediately

app.use(express.json(), express.urlencoded({ extended: true })); // MIDDLEWARE
/**
 * ? ^^ This line enables the application to use two "Middleware" functions.
 * ? the first one, express.json(), parses JSON data from incoming requests
 * ? the second one parses URL-encoded form data (from an HTML form, for example)
 * ? basically, these two functions allow the application to handle different types of data from clients
 */
const AllMyUserRoutes = require("./routes/user.routes"); // gets the function from user.routes

AllMyUserRoutes(app); // runs that function on the application

app.listen(port, () => console.log(`Listening on port: ${port}`));
