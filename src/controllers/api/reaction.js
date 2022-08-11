const connection = require("../../config/connection");

const Reaction = require("../../models/Reaction");

const server = require("../../index");

const mongoose = require("mongoose");

const createAReaction = async (req, res) => {
  try {
    connection();
    // get a reaction
    const { id } = req.params;
    const { reactionBody, userName } = req.body;
    // findandUpdate reaction

    // push updated reaction into reaction
  } catch (error) {
    console.log(error);
  }
};

const deleteAReaction = (req, res) => {
  res.send("deleteAReaction");
};

module.exports = {
  createAReaction,
  deleteAReaction,
};
