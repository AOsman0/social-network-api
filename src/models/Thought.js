const { Schema } = require("mongoose");

const userSchema = {
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
      ref: "user",
    },
  ],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

model.exports = User;
