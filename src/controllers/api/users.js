// require models

const User = require("../../models/User");
const Thought = require("../../models/Thought");

const server = require("../../index");

const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  res.send("getAllUsers");
  try {
    const users = await User.find({});
    return res.json({ users });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = (req, res) => {
  res.send("getUserById");
};

const createANewUser = (req, res) => {
  res.send("createANewUser");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

const deleteUserById = (req, res) => {
  res.send("deleteUserById");
};

module.exports = {
  getAllUsers,
  getUserById,
  createANewUser,
  updateUser,
  deleteUserById,
};
