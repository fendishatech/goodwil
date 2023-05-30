const { DataTypes } = require("sequelize");
const db = require("../helpers/database");
const { v4: uuidv4 } = require("uuid");

const Product = db.define("products", {
  id: {
    type: DataTypes.UUID,
    defaultValue: db.UUIDV4,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;
