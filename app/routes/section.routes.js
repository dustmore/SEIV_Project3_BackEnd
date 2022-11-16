// module.exports = app => {
//     const sections = require("../controllers/section.controller.js");
//     //const { authenticate } = require("../authorization/authorization.js");
//     var router = require("express").Router();

//     // Create a new section for a course
//     router.post("/:courseId/sections/", sections.create);

//     // Retrieve all sections for a course
//     router.get("/:courseId/sections/", sections.findAllForCourse);

//     // Retrieve a single section with id
//     router.get("/:courseId/sections/:id", sections.findOne);

//     // Update a section with id
//     router.put("/:courseId/sections/:id", sections.update);

//     // Delete a section with id
//     router.delete("/:courseId/sections/:id", sections.delete);

//     // Delete all sections
//     router.delete("/:courseId/sections/:id",sections.deleteAll);

//     app.use('/schedule-t4/courses', router);
// };

module.exports = app => {
    const sections = require("../controllers/section.controller.js");
    //const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();

    // Create a new section for a course
    router.post("/", sections.create);

    // // Retrieve all sections for a course
    // router.get("/", sections.findAllForCourse);

    // Retrieve all sections for a course
    router.get("/", sections.findAll);

    // Retrieve a single section with id
    router.get(":id", sections.findOne); 

    // Update a section with id
    router.put(":id", sections.update);

    // Delete a section with id
    router.delete(":id", sections.delete);

    // Delete all sections
    router.delete(":id",sections.deleteAll);

    app.use('/schedule-t4/sections', router);
}