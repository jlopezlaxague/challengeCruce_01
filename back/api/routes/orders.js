const express = require("express");
const router = express.Router();
const axios = require("axios");
const { User } = require("../db/index");

function fetchOrders(accountName, appKey, appToken) {
  config = {
    method: "get",
    url: `https://${accountName}.vtexcommercestable.com.br/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppKey": appKey,
      "X-VTEX-API-AppToken": appToken,
      "User-Agent": "ReadMe-API-Explorer",
      Cookie: "janus_sid=adbab813-ed15-4d66-82ce-494c69e65c00",
    },
  };
  const fetch = axios(config);
  const resultFetch = fetch.then((result) => result.data);
  return resultFetch;
}

function fetchUserOrders(mailsUsers) {
  const objetoUser = [];
  return Promise.all(
    mailsUsers.map(async (email) => {
      const user = await User.findOne({ where: { email } });
      const orders = await fetchOrders(
        user.accountName,
        user.appKey,
        user.appToken
      );
      return { mail: email, ordenes: orders.list };
    })
  );
}

//2.5) Traer órdenes de VTEX
router.get("/", (req, res, next) => {
  const accountName = "cruce";
  const appKey = "vtexappkey-cruce-PMPMOM";
  const appToken =
    "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLXVNHJXGJVKAYCYASSZAIJKYXHDUWG";
  fetchOrders(accountName, appKey, appToken)
    .then((data) => {
      console.log(data.list);
      res.status(200).send(data.list);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error en la búsqueda");
    });
});

//2.6) Traer órdenes de determinados usuarios
router.post("/", (req, res) => {
  const mailsUsers = req.body.emails;
  fetchUserOrders(mailsUsers)
    .then((usersOrders) => {
      response = { listaOrdenes: usersOrders };
      console.log(response);
      res.status(200).send(response);
    })
    .catch((e) => {
      console.log("error", e);
      res.status(400).send("Error en la búsqueda");
    });
});

module.exports = router;
