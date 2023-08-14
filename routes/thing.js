const expressThing = require("express");
const routerThing = expressThing.Router();
const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multr = require("../middleware/multer-config");

routerThing.post("/", multr, stuffCtrl.createThing);
routerThing.put("/:id", multr, stuffCtrl.modifyThing);
routerThing.get("/:id",  stuffCtrl.getOneThing);
routerThing.get("/",stuffCtrl.getAllThing);
routerThing.delete("/:id", multr, stuffCtrl.deleteThing);

module.exports = routerThing;
