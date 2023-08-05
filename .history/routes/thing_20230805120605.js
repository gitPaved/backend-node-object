const expressThing = require("express");
const routerThing = expressThing.Router();
const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');


routerThing.post("/",  stuffCtrl.createThing);
routerThing.put("/:id",  stuffCtrl.modifyThing);
routerThing.get("/:id",  stuffCtrl.getOneThing);
routerThing.get("/",  stuffCtrl.getAllThing);
routerThing.delete("/:id",  stuffCtrl.deleteThing);

module.exports = routerThing;
