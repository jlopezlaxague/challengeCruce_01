const express = require("express");
const router = express.Router();
const users = require("./users");
const orders = require("./orders");

router.use("/users", users);
router.use("/orders", orders);

//para armar rutas hay que hacer un archivo por cada funcionalidad e importarlo acá
//luego usar router.use("/funcionalidad", userRoutesEjemplo)

module.exports = router;
