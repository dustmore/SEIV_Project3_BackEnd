module.exports = app => {
  const courses = require("../controllers/course.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new course
  router.post("/", [authenticate], courses.create);

  // Retrieve all courses
  router.get("/", [authenticate], courses.findAll);

  // Retrieve all courses for user
 // router.get("/userCour/:userId", [authenticate], courses.findAllForUser);

  // Retrieve a single course with id
  router.get("/:id", [authenticate], courses.findOne);

  // Update a course with id
  router.put("/:id", [authenticate], courses.update);

  // Delete a course with id
  router.delete("/:id", [authenticate], courses.delete);

  // Delete all courses
  router.delete("/", [authenticate], courses.deleteAll);

  app.use('/schedule-t4/courses', router);
};