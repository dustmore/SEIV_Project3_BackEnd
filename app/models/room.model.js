module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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