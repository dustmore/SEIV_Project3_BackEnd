
module.exports = app => {
    const semester = require("../controllers/semester.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new semester
    router.post("/", [authenticate], semester.create);
  
    // Retrieve all semesters
    router.get("/", [authenticate], semester.findAll);
  
   // Retrieve all semesters for user
   // router.get("/userCour/:userId", [authenticate], semester.findAllForUser);
  
    // Retrieve a single semster with id
    router.get("/:id", [authenticate], semester.findOne);
  
    // Update a semester with id
    router.put("/:id", [authenticate], semester.update);
  
    // Delete a semester with id
    router.delete("/:id", [authenticate], semester.delete);
  
    // Delete all semesters
    router.delete("/", [authenticate], semester.deleteAll);
  
    app.use('/schedule-t4/semester', router);
  };