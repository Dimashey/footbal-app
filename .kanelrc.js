const path = require("path");

module.exports = {
  connection: {
    password: "dima123",
    port: 5432,
    database: "football_app",
    host: "localhost",
    user: "postgres",
  },

  preDeleteModelFolder: true,
  outputPath: "./src/models",

  customTypeMap: {
    "pg_catalog.tsvector": "string",
    "pg_catalog.bpchar": "string",
  },
};
