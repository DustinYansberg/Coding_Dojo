const mongoose = require("mongoose");
require("dotenv").config(); // gives access to .env environmental variables (basically special global variables)

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.qok15jk.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Established a connection to the database")) // yayyy
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  ); // boooo
