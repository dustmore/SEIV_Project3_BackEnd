
module.exports = app => {
    const semester = require("../controllers/semester.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new semester
    router.post("/:courseId/semesters/", [authenticate], semester.create);
  
    // Retrieve all semesters
    router.get("/:courseId/semesters/", [authenticate], semester.findAll);
  
   // Retrieve all semesters for user
   // router.get("/userCour/:userId", [authenticate], semester.findAllForUser);
  
    // Retrieve a single semster with id
    router.get("/:courseId/semesters/:id", [authenticate], semester.findOne);
  
    // Update a semester with id
    router.put("/:courseId/semesters/:id", [authenticate], semester.update);
  
    // Delete a semester with id
    router.delete("/:courseId/semesters/:id", [authenticate], semester.delete);
  
    // Delete all semesters
    router.delete("/:courseId/semesters/", [authenticate], semester.deleteAll);
  
    app.use('/schedule-t4/courses', router);
  };