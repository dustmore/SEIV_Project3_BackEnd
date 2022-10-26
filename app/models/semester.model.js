
module.exports = (sequelize, Sequelize) => {
    const Semester = sequelize.define("semester", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      sectionId: {
        type: Sequelize.INTEGER,
      },
      semesterStartDate: {
        type: Sequelize.STRING
      },
      semesterEndDate: {
        type: Sequelize.STRING
      }
    });
   
    return Semester;
};