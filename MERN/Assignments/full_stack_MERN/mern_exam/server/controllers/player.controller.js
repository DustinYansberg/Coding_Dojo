const { Player } = require("../models/player.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

//* CREATE
module.exports.createPlayer = (request, response) => {
  const { name, position, gameStatuses } = request.body;
  Player.create({
    name,
    position,
    gameStatuses,
  })
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

//* READ
module.exports.getAllPlayers = (request, response) => {
  Player.find({})
    .then((players) => response.json(players))
    .catch((err) => response.status(400).json(err));
};

module.exports.getPlayer = (request, response) => {
  Player.findOne({ _id: request.params.id })
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

//* DELETE
module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};

//* UPDATE
module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { runValidators: true },
    {
      new: true,
    }
  )
    .then((updatedPlayer) => response.json(updatedPlayer))
    .catch((err) => response.status(400).json(err));
};
