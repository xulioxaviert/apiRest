const Actor = require("./actors.model");

// Metodo para recuperar todos los actores de nuestra DB
const getAll = async (req, res, next) => {
  try {
    // find es un método de mongoose para recuperar todos los actores
    const actors = await Actor.find();
    // res - es loq ue enviaremos al frontal
    // cabecera - status 200 Todo OK
    // cuerpo -> actors - json
    res.status(200).json(actors);
  } catch (error) {
    return next(error);
  }
};

// Metodo para recuperar un actor de nuestra DB
const getOne = async (req, res, next) => {
  try {
    // req -> recuperar valores de la request: http://jdhfjdh....10
    const { id } = req.params;
    // findById en el que por param recibe un id y te lo busca
    const actor = await Actor.findById(id);
    res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

// Método para crear un nuevo actor
const postOne = async (req, res, next) => {
  try {
    // Nuevo actor para introducir los datos del front
    const actor = new Actor();
    // Este body es la info que nos llega desde el front
    actor.name = req.body.name;
    actor.age = req.body.age;
    actor.nationality = req.body.age;
    // Método de mongoose - que guarda el actor en la DB
    const actorDB = await actor.save();
    return res.status(201).json(actorDB);
  } catch (error) {
    return next(error);
  }
};

// Método para modificar un actor en base a su id
const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = new Actor(req.body);
    // id nos lo generan y es un numero único
    actor._id = id;
    // updatear el actor -> Método de mongoose - que sustituye el actor en la DB
    // Param 1- el id recuperado
    // param 2 - el actor con la info del front
    const updateActor = await Actor.findByIdAndUpdate(id, actor);
    return res.status(200).json(updateActor);
  } catch (error) {
    return next(error);
  }
};

// Método para eliminar un actor en base a su id
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    // borrar el actor -> Método de mongoose - que borra el actor en la DB por el id recuperado
    const actor = await Actor.findByIdAndDelete(id);
    return res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
};
