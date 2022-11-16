// module.exports = app => {
//     const office = require("../controllers/office.controller.js");
//     const { authenticate } = require("../authorization/authorization.js");
//     var router = require("express").Router();
  
//     // Create a new office
//     router.post("/", [authenticate], office.create);
  
//     // Retrieve all office
//     router.get("/", [authenticate], office.findAll);
  
//     // Retrieve all offices for user
//    router.get("/", [authenticate], office.findAllForUser);
  
//     // Retrieve a single office with id
//     router.get("/:id", [authenticate], office.findOne);
  
//     // Update a office with id
//     router.put("/:id", [authenticate], office.update);
  
//     // Delete a office with id
//     router.delete("/:id", [authenticate], office.delete);
  
//     // Delete all offices
//     router.delete("/", [authenticate], office.deleteAll);
  
//     app.use('/schedule-t4/office', router);
//   };

module.exports = app => {
  const office = require("../controllers/office.controller.js");
  var router = require("express").Router();

  // Create a new office
  router.post("/", office.create);

  // Retrieve all office
  router.get("/", office.findAll);

  // Retrieve all offices for user
 router.get("/", office.findAllForUser);

  // Retrieve a single office with id
  router.get("/:id", office.findOne);

  // Update a office with id
  router.put("/:id", office.update);

  // Delete a office with id
  router.delete("/:id", office.delete);

  // Delete all offices
  router.delete("/", office.deleteAll);

  app.use('/schedule-t4/office', router);
};