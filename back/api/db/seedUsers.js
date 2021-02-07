const User = require("./models/user");
const { options } = require("./models/user");

User.bulkCreate(
  [
    {
      email: "foo@foo.com",
      password: "123",
      accountName: "foo",
      appKey: null,
      appToken: null,
      metodoDeFacturacion: "Mercado Pago",
      isActive: false,
    },
    {
      email: "bar@bar.com",
      password: "123",
      accountName: "bar",
      appKey: null,
      appToken: null,
      metodoDeFacturacion: "Prisma",
      isActive: false,
    },
    {
      email: "matias@cruce.com",
      password: "123",
      accountName: "cruce",
      appKey: "vtexappkey-cruce-PMPMOM",
      appToken:
        "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLXVNHJXGJVKAYCYASSZAIJKYXHDUWG",
      metodoDeFacturacion: "VTEX",
      isActive: true,
    },
    {
      email: "franco@cruce.com",
      password: "123",
      accountName: "cruce",
      appKey: "vtexappkey-cruce-PMPMOM",
      appToken:
        "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLXVNHJXGJVKAYCYASSZAIJKYXHDUWG",
      metodoDeFacturacion: "VTEX",
      isActive: true,
    },
    {
      email: "flavio@cruce.com",
      password: "123",
      accountName: "cruce",
      appKey: "vtexappkey-cruce-PMPMOM",
      appToken:
        "SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLXVNHJXGJVKAYCYASSZAIJKYXHDUWG",
      metodoDeFacturacion: "VTEX",
      isActive: true,
    },
  ],
  { individualHooks: true }
).then(() => {
  console.log("Base de datos seedeada");
  process.exit(0);
});
