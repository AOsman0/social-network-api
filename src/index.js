console.log("hello node");

// Import dotenv

require("dotenv").config();

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
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`ERROR FAILED TO RUN SERVER ${error.message}`);
  }
};

init();
