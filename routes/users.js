var express = require("express");
var router = express.Router();
const controller = require("../controllers/controller");
const {check, validationResult, body } = require ("express-validator")
/* GET users listing. */
router.get("/", controller.myUser);
router.post("/crearUsuario",[
    check("name").not().isEmpty().withMessage("el campo vacio").isLength({max:15, min:3}).withMessage("debe haber nombre valido")
], controller.newUser);
router.get("/ver", controller.verUser);
router.delete("/eliminar/:id", controller.eliminarUser)


module.exports = router;
    