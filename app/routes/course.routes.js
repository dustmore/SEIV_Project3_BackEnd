 
module.exports = app => {
    const courses = require("../controllers/course.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create a new Lesson for a Tutorial
    router.post("/:courseId/courses/", [authenticate], course.create);
 
    // Retrieve all Lessons for a Tutorial
    router.get("/:courseId/courses/", [authenticate], courses.findAllForCourse);

    // Retrieve all published Lessons for a Tutorial
    router.get("/:courseId/courses/published", [authenticate], courses.findAllPublished);

    // Retrieve a single Lesson with id
    router.get("/:courseId/courses/:id", [authenticate], courses.findOne);

    // Update a Lesson with id
    router.put("/:courseId/courses/:id", [authenticate], courses.update);

    // Delete a Lesson with id
    router.delete("/:courseId/courses/:id", [authenticate], coures.delete);

    // Delete all Lessons
    router.delete("/:courseId/courses/:id", [authenticate], courses.deleteAll);

    app.use('/course/courses', router);
};