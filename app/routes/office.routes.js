module.exports = app => {
    const office = require("../controllers/office.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new office
    router.post("/:userId/office/", [authenticate], office.create);
  
    // Retrieve all office
    router.get("/:userId/office/", [authenticate], office.findAll);
  
    // Retrieve all offices for user
   router.get("/:userId/office/", [authenticate], office.findAllForUser);
  
    // Retrieve a single office with id
    router.get("/:userId/office/:id", [authenticate], office.findOne);
  
    // Update a office with id
    router.put("/:userId/office/:id", [authenticate], office.update);
  
    // Delete a office with id
    router.delete("/:userId/office/:id", [authenticate], office.delete);
  
    // Delete all offices
    router.delete("/:userId/office/", [authenticate], office.deleteAll);
  
    app.use('/schedule-t4/user', router);
  };