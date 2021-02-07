const express = require("express");
const app = express();
const port = 3000;
const router = require("./api/routes/index");
const { db } = require("./api/db/index");

app.use(express.json());
app.use("/api", router);

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
  });
});
