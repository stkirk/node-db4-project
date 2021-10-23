const express = require("express");
const helmet = require("helmet");
const recipeRouter = require("./recipe-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipeRouter);

server.get("/api", (req, res) => {
  res.send("You found recipes api, use /api/recipes for requests");
});

server.use("*", (req, res, next) => {
  next({ status: 404, message: "not found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
