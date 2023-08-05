const expressUser = require("express");
const routerUser = expressUser.Router();
const userCtrl = require("../controllers/user");

routerUser.post("/signup", userCtrl.signup);
routerUser.post("/login", userCtrl.login);

module.exports = routerUser;
