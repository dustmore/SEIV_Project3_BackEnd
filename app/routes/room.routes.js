
module.exports = app => {
    const room = require("../controllers/room.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new room
    router.post("/", [authenticate], room.create);
  
    // Retrieve all rooms
    router.get("/", [authenticate], room.findAll);
  
    // Retrieve all rooms for user
    // router.get("/userCour/:userId", [authenticate], room.findAllForUser);
   
    // Retrieve a single room with id
    router.get("/:id", [authenticate], room.findOne);
 
    // Update a room with id
    router.put("/:id", [authenticate], room.update);
 
    // Delete a room with id
    router.delete("/:id", [authenticate], room.delete);

    // Delete all rooms
    router.delete("/", [authenticate], room.deleteAll);
 
    app.use('/schedule-t4/room', router);
  };