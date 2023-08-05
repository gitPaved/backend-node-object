const ThingController = require("../models/thing");

exports.createThing = (req, res, next) => {

  const thingObject = JSON.parse(req.body.thing);
   delete thingObject._id;
   delete thingObject._userId;
   const thing = new ThingController({
       ...thingObject,
       userId: req.auth.userId,
       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
   });
 
   thing.save()
   .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
   .catch(error => { res.status(400).json( { error })})

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

exports.getOneThing = (req, res, next) => {
  ThingController.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllThing = (req, res, next) => {
  ThingController.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};
