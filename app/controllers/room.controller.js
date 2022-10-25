
const db = require("../models");
const Room = db.room;
const Op = db.Sequelize.Op;

// Create and Save a new room
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a room
  const room = {
    roomId: req.body.roomId,
    roomNumber: req.body.roomNumber,
    sectionId: req.body.sectionId
  };
  
  // Save room in the database
  Room.create(room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the room."
      });
    });
};

// Retrieve all rooms from the database.
exports.findAll = (req, res) => {
  const roomId = req.query.roomId;
  var condition = roomId ? { roomId: { [Op.like]: `%${roomId}%` } } : null;
  Room.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rooms."
      });
    });
};

// Find a single room with an id
exports.findOne = (req, res) => {
  const id = req.params.roomId;
  Room.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find room with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving room with id=" + id
      });
    });
};

// Update a rooom by the id in the request
exports.update = (req, res) => {
  const id = req.params.roomId;
  Room.update(req.body, {
    where: { roomId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "room was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update room with id=${id}. Maybe room was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating room with id=" + id
      });
    });
};

// Delete a room with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.roomId;
  Room.destroy({
    where: { roomId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Room was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete room with id=${id}. Maybe room was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete room with id=" + id
      });
    });
};

// Delete all rooms from the database.
exports.deleteAll = (req, res) => {
  Room.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Rooms were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rooms."
      });
    });
};