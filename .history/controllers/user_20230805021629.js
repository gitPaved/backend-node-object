const User = require("../models/user");

exports.signup = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur cree" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {};
