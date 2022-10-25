
module.exports = app => {
    const facultysection = require("../controllers/facultysection.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new faculty section
    router.post("/", [authenticate], facultysection.create);
  
    // Retrieve all faculty sections
    router.get("/", [authenticate], facultysection.findAll);
  
    // Retrieve all faculty sections for user
   // router.get("/userCour/:userId", [authenticate], facultysection.findAllForUser);
  
    // Retrieve a single faculty section with id
    router.get("/:id", [authenticate], facultysection.findOne);
  
    // Update a faculty section with id
    router.put("/:id", [authenticate], facultysection.update);
  
    // Delete a faculty section with id
    router.delete("/:id", [authenticate], facultysection.delete);
  
    // Delete all faculty sections
    router.delete("/", [authenticate], facultysection.deleteAll);
  
    app.use('/schedule-t4 facultysection', router);
  };