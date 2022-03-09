const Movie = require("./movies.model");

// Metodo para recuperar todos las movies de nuestra DB
const getAll = async (req, res, next) => {
  try {
    // Popular datos -> sin ello te devuelve unicamente los ids de los actores
    const movies = await Movie.find().populate("actors");
    res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

// Metodo para recuperar una movie de nuestra DB
const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate("actors");
    res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

// Método para crear una nueva movie
const postOne = async (req, res, next) => {
  try {
    const movie = new Movie();
    movie.name = req.body.name;
    movie.year = req.body.year;
    movie.actors = req.body.actors;
    movie.genre = req.body.genre;
    const movieDB = await movie.save();
    return res.status(201).json(movieDB);
  } catch (error) {
    return next(error);
  }
};

// Método para modificar una movie en base a su id
const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = new Movie(req.body);
    movie._id = id;
    const updateMovie = await Movie.findByIdAndUpdate(id, movie);
    return res.status(200).json(updateMovie);
  } catch (error) {
    return next(error);
  }
};

// Método para eliminar una movie en base a su id
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    return res.status(200).json(movie);
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
