// module.exports = app => {
//     const faculty = require("../controllers/faculty.controller.js");
//     const { authenticate } = require("../authorization/authorization.js");
//     var router = require("express").Router();
  
//     // Create a new faculty
//     router.post("/", [authenticate], faculty.create);
  
//     // Retrieve all faculty
//     router.get("/", [authenticate], faculty.findAll);
  
//     // Retrieve all faculties for user
//    // router.get("/userCour/:userId", [authenticate], faculty.findAllForUser);
  
//     // Retrieve a single faculty with id
//     router.get("/:id", [authenticate], faculty.findOne);
  
//     // Update a faculty with id
//     router.put("/:id", [authenticate], faculty.update);
  
//     // Delete a faculty with id
//     router.delete("/:id", [authenticate], faculty.delete);
  
//     // Delete all faculties
//     router.delete("/", [authenticate], faculty.deleteAll);
  
//     app.use('/schedule-t4/faculty', router);
//   };

module.exports = app => {
  const faculty = require("../controllers/faculty.controller.js");
  var router = require("express").Router();

  // Create a new faculty
  router.post("/", faculty.create);

  // Retrieve all faculty
  router.get("/", faculty.findAll);

  // Retrieve all faculties for user
 // router.get("/userCour/:userId", faculty.findAllForUser);

  // Retrieve a single faculty with id
  router.get("/:id", faculty.findOne);

  // Update a faculty with id
  router.put("/:id", faculty.update);

  // Delete a faculty with id
  router.delete("/:id", faculty.delete);

  // Delete all faculties
  router.delete("/", faculty.deleteAll);

  app.use('/schedule-t4/faculty', router);
};