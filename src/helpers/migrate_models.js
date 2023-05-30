const Product = require("../models/product.model");

// DEV
const migrate_tables = async () => {
  try {
    await Product.sync();
    console.log("Table Migrated Successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

module.exports = migrate_tables;
