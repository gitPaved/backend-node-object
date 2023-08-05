const expressThing = require("express");
const routerThing = express.Router();

routerThing.post("/api/stuff", (req, res, next) => {
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

routerThing.get("/api/stuff/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.get("/api/stuff", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
});

routerThing.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object suprime" }))
    .catch((error) => res.status(400).json({ error }));
});
