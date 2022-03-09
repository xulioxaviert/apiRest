// Requerir la librería de mongoose
const mongoose = require("mongoose");

// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const movieSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    year: { type: Number, required: false, trim: true },
    genre: { type: String, required: false, trim: true },
    // Este es un array de ids - que hace referencia al modelo de actors
    actors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "actors", required: true },
    ],
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Actor la referencia y el Schema
// movies - es el nombre de mi colección en la DB
const Movie = mongoose.model("movies", movieSchema);
// Exportar ES5
module.exports = Movie;
