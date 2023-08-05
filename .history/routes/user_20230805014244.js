const expressUser = require('express')
const routerUser = expressThing.Router();
const userCtrl = require("../controllers/user")


routerThing.post("/signup", userCtrl.signup);
routerThing.post("/login", userCtrl.login);

module.exports = routerUser