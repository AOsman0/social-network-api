const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reaction = require("./Reaction");

const ThoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 280,
  },
  createdAt: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: reaction,
    },
  ],
};

const schema = new Schema(ThoughtSchema);

const Thought = mongoose.model("Thought", schema);

module.exports = Thought;
