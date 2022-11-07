module.exports = (sequelize, Sequelize) => {
    const Office = sequelize.define("office", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      semesterId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      weekDay: {
        type: Sequelize.STRING
      },
      officeStartTime: {
        type: Sequelize.STRING
      },
      officeEndTime: {
        type: Sequelize.STRING
      }
    });
  
    return Office;
};