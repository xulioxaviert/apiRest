// Importar Express -> Métodos o funciones para gestionar mi server
const express = require("express");
// Importar Cors -> Librería que gestiiona proxies o urls permitadas
const cors = require("cors");
// Importar Body-parser -> Librería transformación de datos
const bodyParser = require("body-parser");

// Importar nuestras routes o Endpoints
const MovieRoutes = require("./src/api/movies/movies.routes");
const ActorRoutes = require("./src/api/actors/actors.routes");

// Método de conexión de la DB
const { connect } = require("./src/api/utils/database/db");

// Ejecutar mi función de conexión a la DB
connect();

// Inicializar Express
const app = express();

// Transformación de datos
app.use(bodyParser.json());

// No codifica caracteres reservador que tienene un significado especial en la URI.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Config de Proxies + CORS
app.use(cors());

// Cargar las rutas
app.use("/api/movies", MovieRoutes);
app.use("/api/actors", ActorRoutes);

app.use("/", (req, res, next) => {
  return res.json("Mis EndPoints son /api/movies & /api/actors");
});

// Seleccionar Puerto del .env y si no existe poner 8080
const PORT = process.env.PORT || 8080;

// Escuchadores d enuestro server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});

// Capturador de Error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

// Errores del server 500
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
