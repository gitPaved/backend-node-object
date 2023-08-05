const ThingController = require("../models/thing");

exports.createThing = (req, res, next) => {
  console.log(req.body);
  delete req.body._id;
  const thing = new ThingController({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Object cree" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
  ThingController.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
  ThingController.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object suprime" }))
    .catch((error) => res.status(400).json({ error }));
};
