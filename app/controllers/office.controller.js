const db = require("../models");
const Office = db.office;
const Op = db.Sequelize.Op;

// Create and Save a new office
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a office
  const office = {
    id: req.body.id,
    userId: req.body.userId,
    semesterId: req.body.semesterId,
    officeWeekDay: req.body.officeWeekDay,
    officeStartTime: req.body.officeStartTime,
    officeEndTime: req.body.officeEndTime
    
  };
  
  // Save office in the database
  Office.create(office)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the office."
      });
    });
};

// Retrieve all offices from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Office.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving offices."
      });
    });
};

// Find all offices with a user id
exports.findAllForUser = (req, res) => {
    const userId = req.params.userId;
    Office.findAll({ where: { userId : userId }})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find office hours with user id=${userId}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving office hours with user id=" + userId
        });
      });
  };

// Find a single office with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Office.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find office with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving office with id=" + id
      });
    });
};

// Update a rooom by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Office.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "office was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update office with id=${id}. Maybe office was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating office with id=" + id
      });
    });
};

// Delete a office with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Office.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Office was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete office with id=${id}. Maybe office was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete office with id=" + id
      });
    });
};

// Delete all offices from the database.
exports.deleteAll = (req, res) => {
  Office.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Offices were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all offices."
      });
    });
};