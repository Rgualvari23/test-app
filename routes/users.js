var express = require("express");
var router = express.Router();
const controller = require("../controllers/controller");
/* GET users listing. */
router.get("/", controller.myUser);
router.post("/crearUsuario", controller.newUser);
router.get("/ver", controller.verUser);
router.delete("/eliminar/:id", controller.eliminarUser)


module.exports = router;
    