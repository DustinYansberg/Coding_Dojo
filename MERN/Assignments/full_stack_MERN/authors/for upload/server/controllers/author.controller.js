const { Author } = require("../models/author.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

//* CREATE
module.exports.createAuthor = (request, response) => {
  const { name } = request.body;
  Author.create({
    name,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

//* READ
module.exports.getAllAuthors = (request, response) => {
  Author.find({})
    .then((authors) => response.json(authors))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

//* DELETE
module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};

//* UPDATE
module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { runValidators: true },
    {
      new: true,
    }
  )
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};
