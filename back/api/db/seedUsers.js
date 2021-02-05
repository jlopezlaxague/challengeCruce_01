const User = require("./models/user");

User.create({
  email: "foo@bar.com",
  password: "123abc",
  accountName: "foobar",
  metodoDeFacturacion: "VTEX",
}).then(() => {
  console.log("Base de datos seedeada");
  process.exit(0);
});
