// Es el enrutamiento | EndPoints que nos da express
const ActorRoutes = require("express").Router();

// Importación en ES5 - Métodos de controller
const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./actors.controller");

// Traer todos los actores en el endpoint /all
ActorRoutes.get("/", getAll);
// Traer Actor por id
ActorRoutes.get("/:id", getOne);
// Crear un actor POST
ActorRoutes.post("/", postOne);
// Modificar Actor
ActorRoutes.patch("/:id", patchOne);
// Delete Actor
ActorRoutes.delete("/:id", deleteOne);

module.exports = ActorRoutes;
