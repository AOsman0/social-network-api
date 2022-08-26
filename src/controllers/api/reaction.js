const connection = require("../../config/connection");

const Reaction = require("../../models/Reaction");

const server = require("../../index");

const mongoose = require("mongoose");

const Thought = require("../../models/Thought");

const createAReaction = async (req, res) => {
  try {
    connection();
    // get a reaction
    const { id } = req.params;
    const { userName, email } = req.body;
    // // findandUpdate reaction
    console.log(email, userName, id);
    // // push updated reaction into reaction
    const newReaction = await Reaction.create({ userName, email });

    const reactedThought = await Thought.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          reactions: newReaction._id,
        },
      },
      {
        new: true,
      }
    );
    // console.log(newReaction);
    console.log(reactedThought);
  } catch (error) {
    console.log(error);
  }
};

const deleteAReaction = async (req, res) => {
  res.send("deleteAReaction");
  // delete a created recation through reaction id

  // In reaction model

  try {
    connection();
    // get a created creation from model
    const { id } = req.params;
    const { userName, email } = req.body;

    const removeReaction = await Reaction.deleteOne({ userName, email, id });

    console.log(removeReaction);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAReaction,
  deleteAReaction,
};
