const expressProduct = require("express");
const routeProduct = expressProduct.Router();
const Thing = require("../models/product");

routeProduct.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Object cree" }))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.get("/api/stuff/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.get("/api/stuff", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object suprime" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = routeProduct;