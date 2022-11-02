module.exports = (sequelize, Sequelize) => {
    const Section = sequelize.define("section", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      sectionStartDate: {
        type: Sequelize.STRING
      },
      sectionEndDate: {
        type: Sequelize.STRING
      },
      sectionStartTime: {
        type: Sequelize.STRING
      },
      sectionEndTime: {
        type: Sequelize.STRING
      }
    });
  
    return Section;
};

