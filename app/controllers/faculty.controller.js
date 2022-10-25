
const db = require("../models");
const Faculty = db.faculty;
const Op = db.Sequelize.Op;

// Create and Save a new faculty
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a faculty
  const faculty = {
    facultyId: req.body.facultyId,
    facultyFName: req.body.facultyFName,
    facultyLName: req.body.facultyLName,
  };
  
  // Save faculty in the database
  Faculty.create(faculty)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the faculty."
      });
    });
};

// Retrieve all faculties from the database.
exports.findAll = (req, res) => {
  const facultyId = req.query.facultyId;
  var condition = facultyId ? { facultyId: { [Op.like]: `%${facultyId}%` } } : null;
  Faculty.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving faculties."
      });
    });
};

// Find a single faculty with an id
exports.findOne = (req, res) => {
  const id = req.params.facultyId;
  Faculty.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find faculty with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving faculty with id=" + id
      });
    });
};

// Update a faculty by the id in the request
exports.update = (req, res) => {
  const id = req.params.facultyId;
  Faculty.update(req.body, {
    where: { facultyId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "faculty was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update faculty with id=${id}. Maybe faculty was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating faculty with id=" + id
      });
    });
};

// Delete a faculty with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.facultyId;
  Faculty.destroy({
    where: { facultyId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Faculty was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete faculty with id=${id}. Maybe faculty was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete faculty with id=" + id
      });
    });
};

// Delete all faculties from the database.
exports.deleteAll = (req, res) => {
  Faculty.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Faculties were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Faculties."
      });
    });
};