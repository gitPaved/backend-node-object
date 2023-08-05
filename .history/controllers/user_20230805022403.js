const User = require("../models/user");

exports.signup = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Paire identifiant/mot passe incorrect" });
      } else {
        if (req.body.password === user.password) {
          res.status(200).json({
            userId: user._id,
            toke: "TOKEN",
          });
        } else {
          res
            .status(401)
            .json({ message: "Paire identifiant/mot passe incorrect" });
        }
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
