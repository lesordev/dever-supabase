const express = require("express");

const controller = express.Router();

// INFO: Create
controller.post("/", async (req, res) => {
  res.send("Method `POST /` not implement");
});

// INFO: Get all
controller.get("/", async (req, res) => {
  res.send("Method `GET /` not implement");
});

// INFO: Get one
controller.get("/:id", async (req, res) => {
  res.send("Method `GET /:id` not implement");
});

// INFO: Update one
controller.put("/:id", async (req, res) => {
  res.send("Method `PUT /:id` not implement");
});

// INFO: Delete one
controller.delete("/:id", async (req, res) => {
  res.send("Method `DELETE /:id` not implement");
});

module.exports = controller;
