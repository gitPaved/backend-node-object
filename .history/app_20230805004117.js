const express = require("express");
const mongodb = require("mongoose");
const routerThings = require("./routes/thing");
const uri =
  "mongodb+srv://seller:aZhquARLC5AljveM@cluster0.gr3k9wf.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(routerThings);

mongodb
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = app;
