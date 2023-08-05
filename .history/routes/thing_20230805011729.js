const expressThing = require("express");
const routerThing = expressThing.Router();
const Thing = require("../models/thing");
const stuffCtrl = require("../controllers/stuff")

routerThing.post("/",);

routerThing.get("/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.get("/", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.put("/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.delete("/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object suprime" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = routerThing;