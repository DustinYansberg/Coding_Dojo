const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "This is either an extremely lame joke, or you forgot to give me the setup!"],
    minlength: [5, "Surely your setup is longer than 5 characters?"]
  },
  punchline: {
    type: String,
    required: [true, "hahahaha ... is what I would say if you didn't forget the punchline!"],
    minlength: [5, "Surely your punchline is longer than 5 characters?"]
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
