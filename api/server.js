const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) =>
  res.status(200).json({ message: "Welcome, API up!" })
);

server.post("/greet", (req, res) => {
  const { firstname, lastname } = req.body;

  res.status(201).json({ hello: `${firstname} ${lastname}` });
});

module.exports = server;
