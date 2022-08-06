// require models

const users = require("../../models/User");
const thoughts = require("../../models/Thought");

const getAllUsers = async (req, res) => {
  res.send("getAllUsers");
  try {
    const user = await User.find({});
    return res.json({ data: user });
  } catch (error) {}
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
