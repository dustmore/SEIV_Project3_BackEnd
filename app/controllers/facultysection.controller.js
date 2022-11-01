const db = require("../models");
const FacultySection = db.facultysection;
const Op = db.Sequelize.Op;

// Create and Save a new faculty section
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a faculty section
  const facultysection = {
    id: req.body.id,
    facultyId: req.body.facultyId,
    sectionId: req.body.sectionId
  };
  
  // Save faculty section in the database
  FacultySection.create(facultysection)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the faculty section."
      });
    });
};

// Retrieve all faculty sections from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  FacultySection.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving faculty sections."
      });
    });
};

// Find a single faculty section with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  FacultySection.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find faculty section with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving faculty section with id=" + id
      });
    });
};

// Update a faculty section by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  FacultySection.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "faculty section was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update faculty section with id=${id}. Maybe faculty section was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating faculty section with id=" + id
      });
    });
};

// Delete a faculty section with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Faculty.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Faculty Section was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete faculty section with id=${id}. Maybe faculty section was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete faculty section with id=" + id
      });
    });
};
// Delete all faculty sections from the database.
exports.deleteAll = (req, res) => {
  Faculty.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Faculty sections were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all faculty sections."
      });
    });
};