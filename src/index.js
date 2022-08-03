console.log("hello node");

// Import dotenv

require("dotenv").config();

const databaseConnection = require("../config/connection.js");

//  import mongoose and express
const express = require("express");
const mongoose = require("mongoose");

// establish routes path
const routes = require("./routes");

// create a port

const PORT = process.env.PORT || 4000;
// set up an express app

const app = express();

// middlwears

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// init function for mongoose and express connection

const init = async () => {
  try {
    await databaseConnection;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`ERROR FAILED TO RUN SERVER ${error.message}`);
  }
};

init();
