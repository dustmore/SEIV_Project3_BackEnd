// module.exports = app => {
//     const room = require("../controllers/room.controller.js");
//     const { authenticate } = require("../authorization/authorization.js");
//     var router = require("express").Router();
  
//     // Create a new room
//     router.post("/:courseId/rooms/", [authenticate], room.create);
  
//     // Retrieve all rooms
//     router.get("/:courseId/rooms/", [authenticate], room.findAll);
  
//     // Retrieve all rooms for user
//     // router.get("/userCour/:userId", [authenticate], room.findAllForUser);
   
//     // Retrieve a single room with id
//     router.get("/:courseId/rooms/:id", [authenticate], room.findOne);
 
//     // Update a room with id
//     router.put("/:courseId/rooms/:id", [authenticate], room.update);
 
//     // Delete a room with id
//     router.delete("/:courseId/rooms/:id", [authenticate], room.delete);

//     // Delete all rooms
//     router.delete("/:courseId/rooms/", [authenticate], room.deleteAll);
 
//     app.use('/schedule-t4/courses', router);
//   };

  module.exports = app => {
    const room = require("../controllers/room.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new room
    router.post("//", [authenticate], room.create);
  
    // Retrieve all rooms
    router.get("/rooms/", [authenticate], room.findAll);
  
    // Retrieve all rooms for user
    // router.get("/userCour/:userId", [authenticate], room.findAllForUser);
   
    // Retrieve a single room with id
    router.get("/rooms/:id", [authenticate], room.findOne);
 
    // Update a room with id
    router.put("/rooms/:id", [authenticate], room.update);
 
    // Delete a room with id
    router.delete("/rooms/:id", [authenticate], room.delete);

    // Delete all rooms
    router.delete("/rooms/", [authenticate], room.deleteAll);
 
    app.use('/schedule-t4/rooms', router);
  };