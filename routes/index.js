const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

/* GET home page. */
router.get("/" , controller.myIndex);

module.exports = router;
