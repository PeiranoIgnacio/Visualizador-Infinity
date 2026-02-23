const express = require("express");
const path = require("path");

const app = express();

// Para que pueda leer JSON (lo necesitaremos después)
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal (cuando entran a la URL base)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puerto (Replit usa process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});