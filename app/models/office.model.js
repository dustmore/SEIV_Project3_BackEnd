module.exports = (sequelize, Sequelize) => {
    const Office = sequelize.define("office", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      weekDay: {
        type: Sequelize.STRING
      },
      officeStartTime: {
        type: Sequelize.DATE
      },
      officeEndTime: {
        type: Sequelize.DATE
      }
    });
  
    return Office;
};