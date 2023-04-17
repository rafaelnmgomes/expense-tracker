const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/${route}`))
);

const server = () => {
  db();
  if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
};

server();

module.exports = { server };
