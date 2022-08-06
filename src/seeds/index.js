require("dotenv").config();

const mongoose = require("mongoose");

// get all our models from our paths

const User = require("../models/User");

const userdata = require("./userdata.json");

const init = async () => {
  try {
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://localhost:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(MONGODB_URI, options);
    console.log("[INFO]: Successfully connected to DB");

    User.deleteMany({});

    await User.insertMany(userdata);
    console.log("[INFO]: Successfully seeded users");

    process.exit(0);
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
    process.exit(0);
  }
};

// get one user

init();
