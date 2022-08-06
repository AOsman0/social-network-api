const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reactionSchema = {
  userName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
};

const schema = new Schema(reactionSchema);

module.exports = schema;
