
const db = require("../models");
const Semester = db.semester;
const Op = db.Sequelize.Op;

// Create and Save a new semester
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a semester
  const semester = {
    id: req.body.id,
    sectionId: req.body.sectionId,
    semesterStartDate: req.body.semesterStartDate,
    semesterEndDate: req.body.semesterEndDate
  };
  
  // Save semester in the database
  Semester.create(semester)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the semester."
      });
    });
};

// Retrieve all sections from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Semester.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving semesters."
      });
    });
};

// Find a single semester with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Semester.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find semester with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving semester with id=" + id
      });
    });
};

// Update a semester by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Semester.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Semester was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update semester with id=${id}. Maybe semester was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating semesterwith id=" + id
      });
    });
};

// Delete a semester with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Semester.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Semester was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete smester with id=${id}. Maybe semester was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete semester with id=" + id
      });
    });
};

// Delete all semesters from the database.
exports.deleteAll = (req, res) => {
  Semester.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Semester were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all semesters."
      });
    });
};