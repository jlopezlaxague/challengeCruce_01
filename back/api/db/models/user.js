const { Model, DataTypes } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appKey: {
      type: DataTypes.STRING,
    },
    appToken: {
      type: DataTypes.STRING,
    },
    metodoDeFacturacion: {
      type: DataTypes.ENUM("Mercado Pago", "VTEX", "Prisma"),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.prototype.hash = function (userPassword, userSalt) {
  return bcrypt.hash(userPassword, userSalt);
};

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
