// Es el enrutamiento | EndPoints que nos da express
const MovieRoutes = require("express").Router();

// Importación en ES5 - Métodos de controller
const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./movies.controller");

// Traer todos los movies en el endpoint /all
MovieRoutes.get("/", getAll);
// Traer movie por id
MovieRoutes.get("/:id", getOne);
// Crear un movie POST
MovieRoutes.post("/", postOne);
// Modificar movie
MovieRoutes.patch("/:id", patchOne);
// Delete movie
MovieRoutes.delete("/:id", deleteOne);

module.exports = MovieRoutes;
