const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Player Name is required"],
      minlength: [3, "The Players Name must have at least three characters"],
    },
    position: {
      type: String,
      required: [true, "Each player must have a position"],
    },
    gameStatuses: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports.Player = mongoose.model("Player", PlayerSchema);
