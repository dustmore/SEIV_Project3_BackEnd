
module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      sectionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sectionStartDate: {
        type: Sequelize.STRING
      },
      sectionEndDate: {
        type: Sequelize.STRING
      },
      sectionStartTime: {
        type: Sequelize.DATE
      },
      sectionEndTime: {
        type: Sequelize.DATE
      }
    });
  
    return Section;
};