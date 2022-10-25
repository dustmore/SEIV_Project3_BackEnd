
module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      roomNumber: {
        type: Sequelize.STRING
      },
      sectionId: {
        type: Sequelize.INTEGER,
      }
    });
   
    return Room;
};