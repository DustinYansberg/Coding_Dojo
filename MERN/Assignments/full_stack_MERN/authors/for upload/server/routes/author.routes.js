const AuthorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.get("/api", AuthorController.index);
  app.get("/api/authors", AuthorController.getAllAuthors);
  app.post("/api/authors", AuthorController.createAuthor);
  app.get("/api/authors/:id", AuthorController.getAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteAuthor);
  app.patch("/api/authors/:id", AuthorController.updateAuthor);
};
