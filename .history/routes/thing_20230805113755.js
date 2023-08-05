const expressThing = require("express");
const routerThing = expressThing.Router();
const stuffCtrl = require("../controllers/stuff");
const auth = require("auth");

routerThing.post("/", auth, stuffCtrl.createThing);
routerThing.put("/:id", auth, stuffCtrl.modifyThing);
routerThing.get("/:id", auth, stuffCtrl.getOneThing);
routerThing.get("/", auth, stuffCtrl.getAllThing);
routerThing.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = routerThing;
