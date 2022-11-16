module.exports = app => {
  const courses = require("../controllers/course.controller.js");
  //const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new course
  router.post("/", courses.create);

  // Retrieve all courses
  router.get("/", courses.findAll);

  // Retrieve all courses for user
 // router.get("/userCour/:userId", [authenticate], courses.findAllForUser);

  // Retrieve a single course with id
  router.get("/:id", courses.findOne);

  // Update a course with id
  router.put("/:id", courses.update);

  // Delete a course with id
  router.delete("/:id", courses.delete);

  // Delete all courses
  router.delete("/", courses.deleteAll);

  app.use('/schedule-t4/courses', router);
};