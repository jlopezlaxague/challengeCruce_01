const express = require("express");
const router = express.Router();
const { User } = require("../db/index");

function updateUsers(reqUpdateUsers) {
  return Promise.all(
    reqUpdateUsers.map(async (updateUser) => {
      const user = await User.findOne({ where: { email: updateUser.email } });
      console.log("UPDATE USER", updateUser);
      for (let prop in updateUser) {
        if (prop != "email") {
          const objPropUpdate = { [prop]: updateUser[prop] };
          console.log("prop", prop);
          const userUptadate = await user.update(objPropUpdate);
        }
      }
      return user;
    })
  );
}

//2.1) y (2.2 bis) Obtener usuarios y listarlos
router.get("/", (req, res) => {
  const query = req.query;
  User.findAll({ where: query })
    .then((users) => {
      let userArray = [];
      users.map((user) => userArray.push(user.email));
      res.status(200).send(userArray);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error en la búsqueda");
    });
});

//2.3) Devolver cantidad de activos e inactivos
router.get("/activity", (req, res) => {
  User.findAll()
    .then((users) => {
      let totalActivos = 0;
      let totalInactivos = 0;
      users.map((user) => {
        user.isActive ? totalActivos++ : totalInactivos++;
      });
      let activityObject = {
        usuarios: {
          activos: totalActivos,
          inactivos: totalInactivos,
        },
      };
      console.log(activityObject);
      res.status(200).send(activityObject);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error en la búsqueda");
    });
});

//2.2) Crear un nuevo usuario
router.put("/create", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      console.log(`usuario ${newUser.email} creado`),
        res.status(201).send(`usuario ${newUser.email} creado`);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error al crear usuario");
    });
});

//2.4) Actualizar información dado un mail
router.put("/", (req, res) => {
  reqUserData = req.body;
  updateUsers(reqUserData)
    .then((userUpdated) => {
      console.log("usuario/s modificado con éxito"),
        res.status(200).send(userUpdated);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error al modificar usuario");
    });
});

module.exports = router;
