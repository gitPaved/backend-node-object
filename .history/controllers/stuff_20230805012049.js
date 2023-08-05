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
