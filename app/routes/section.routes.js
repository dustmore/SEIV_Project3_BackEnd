
module.exports = app => {
    const sections = require("../controllers/section.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create a new section for a course
    router.post("/:courseId/sections/", [authenticate], sections.create);

    // Retrieve all sections for a course
    router.get("/:courseId/sections/", [authenticate], sections.findAllForCourse);

    // Retrieve a single section with id
    router.get("/:courseId/sections/:id", [authenticate], sections.findOne);

    // Update a section with id
    router.put("/:courseId/sections/:id", [authenticate], sections.update);

    // Delete a section with id
    router.delete("/:courseId/sections/:id", [authenticate], sections.delete);

    // Delete all sections
    router.delete("/:courseId/sections/:id", [authenticate], sections.deleteAll);

    app.use('/schedule-t4/courses', router);
};