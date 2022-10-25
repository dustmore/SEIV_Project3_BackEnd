
const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;
// Create and Save a new course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.courseNumber) {
    res.status(400).send({
      message: "Course Number can not be empty!"
    });
    return;
  }

  if (!req.body.courseName) {
    res.status(400).send({
      message: "Course Name can not be empty!"
    });
    return;
  }

  // Create a course
  const course = {
    courseId: req.params.courseId,
    courseNumber: req.body.courseNumber,
    courseName: req.body.courseName,
    courseHour: req.body.courseHour,
    courseLevel: req.body.courseLevel,
    courseRestrict : req.body.courseRestrict,
    courseYearly : req.body.courseYearly,
    courseSession : req.body.courseSession,
    courseDescription: req.body.courseDescription,
  };
  // Save course in the database
  Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the course."
      });
    });
};
// Retrieve all courses from the database.
exports.findAll = (req, res) => {
  const courseId = req.query.courseId;
  var condition = courseId ? {
    courseId: {
      [Op.like]: `%${courseId}%`
    }
  } : null;

  Course.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });
};

// Find a single course with an id for a user
//exports.findAllForUser = (req, res) => {
  //const userId = req.params.userId;
  //Course.findAll({ where: { userId : userId }})
    //.then(data => {
      //if (data) {
        //res.send(data);
      //} else {
        //res.status(404).send({
          //message: `Cannot find Course with id=${courseId}.`
        //});
      //}
    //})
    //.catch(err => {
      //res.status(500).send({
        //message: "Error retrieving Course with id=" + courseId
      //});
    //});
//};

// Find a single course with an id
exports.findOne = (req, res) => {
  const id = req.params.courseId;
  Course.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find course with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving course with id=" + id
      });
    });
};
// Update a course by the id in the request
exports.update = (req, res) => {
  const id = req.params.courseId;
  Course.update(req.body, {
    where: { courseId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update course with id=${id}. Maybe course was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating course with id=" + id
      });
    });
};
// Delete a course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.courseId;
  Course.destroy({
    where: { courseId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "course was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete course with id=${id}. Maybe course was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete course with id=" + id
      });
    });
};
// Delete all courses from the database.
exports.deleteAll = (req, res) => {
  Course.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} courses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all courses."
      });
    });
};
