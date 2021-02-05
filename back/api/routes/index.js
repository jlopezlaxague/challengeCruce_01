const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("prueba users");
});

//para armar rutas hay que hacer un archivo por cada funcionalidad e importarlo acá
//luego usar router.use("/funcionalidad", userRoutesEjemplo)

module.exports = router;
