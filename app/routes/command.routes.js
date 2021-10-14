module.exports = app => {
  const commands = require("../controllers/command.controller.js");

  var router = require("express").Router();

  // Create a new command
  router.post("/:id", commands.create);

  // Retrieve all place's commands
  router.get("/:id", commands.findAllcommands);

  // add a ownerCommand by id
  router.put("/:id", commands.addOwnerNote);

  // Update a Command status to aplly by id
   router.put("/:id", commands.updateStatus);
  
  app.use("/api/commands", router);
};
