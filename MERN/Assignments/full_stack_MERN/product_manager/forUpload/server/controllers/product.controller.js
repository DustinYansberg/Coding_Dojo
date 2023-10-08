const { Product } = require("../models/product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

//* CREATE
module.exports.createProduct = (request, response) => {
  const { title, description, price } = request.body;
  Product.create({
    title,
    description,
    price,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

//* READ
module.exports.getAllPeople = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

//* DELETE
module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

//* UPDATE
module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => console.log(err));
};