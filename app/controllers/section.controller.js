const db = require("../models");
const Section = db.section;
const Op = db.Sequelize.Op;
// Create and Save a new section
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a section
  const section = {
    id: req.body.id,
    courseId: req.body.courseId,
    sectionWeekDay: req.body.sectionWeekDay,
    sectionStartDate: req.body.sectionStartDate,
    sectionEndDate: req.body.sectionEndDate,
    sectionStartTime: req.body.sectionStartTime,
    sectionEndTime: req.body.sectionEndTime
  };
  // Save section in the database
  Section.create(section)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the section."
      });
    });
};
// Retrieve all sections from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  // var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  // Section.findAll({ where: condition })
  Section.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sections."
      });
    });
};
// Find all sections with a course id
exports.findAllForCourse = (req, res) => {
  const courseId = req.params.courseId;
  Section.findAll({ where: { courseId : courseId }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find section with course id=${courseId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving section with course id=" + courseId
      });
    });
};
// Find a single section with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Section.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find section with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving section with id=" + id
      });
    });
};
// Update a section by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Section.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "section was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update section with id=${id}. Maybe section was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating section with id=" + id
      });
    });
};
// Delete a section with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Section.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Section was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Section with id=${id}. Maybe Section was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Section with id=" + id
      });
    });
};
// Delete all Sections from the database.
exports.deleteAll = (req, res) => {
  Section.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Sections were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sections."
      });
    });
};